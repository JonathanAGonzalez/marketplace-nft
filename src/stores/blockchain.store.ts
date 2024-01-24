import { create } from 'zustand';
import { ethers } from 'ethers';
import MARKETPLACE_ABI from '@abi/ABI_MARKETPLACE.json';
import { parsePriceToWei } from 'src/utils/parsePriceToWei';
import { persist } from 'zustand/middleware';

//CONTRACT ADDRESS
const MARKETPLACE_CONTRACT_ADDRESS = import.meta.env
  .PUBLIC_MARKETPLACE_CONTRACT_ADDRESS;

async function getContractMarketPlace() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contractMarketplace = new ethers.Contract(
    MARKETPLACE_CONTRACT_ADDRESS,
    MARKETPLACE_ABI,
    signer
  );
  return contractMarketplace;
}

async function getMetadataPinata(tokenURI: string) {
  const url = `https://purple-personal-guan-424.mypinata.cloud/ipfs/${tokenURI}`;
  const metadata = await fetch(url, {
    method: 'GET',
  });

  const { description, image, name, price } = await metadata.json();

  return {
    description,
    name,
    price,
    image: `https://purple-personal-guan-424.mypinata.cloud/ipfs/${image}`,
  };
}

type TStoreBlockchain = {
  nfts: any[];
  nftDetail: any;
  getAllNfts: () => void;
  mintNft: (tokenURI: string, price: string) => void;
  getDetailNft: (id: number) => void;
  burnNft: (id: number) => void;
};

const useBlockchainStore = create<TStoreBlockchain>()(
  persist(
    (set) => ({
      nfts: [],
      nftDetail: null,
      getAllNfts: async () => {
        try {
          const contract = await getContractMarketPlace();
          const coreNfts = await contract.getAllNftsOnSale();

          const nfts = [];

          for (let i = 0; i < coreNfts.length; i++) {
            if (Number(coreNfts[i]) !== 0) {
              const responseNft = await contract.getNftItem(
                Number(coreNfts[i])
              );
              const tokenURI = responseNft[0];
              const metadata = await getMetadataPinata(tokenURI);
              nfts.push({ ...metadata, id: Number(coreNfts[i]) });
            }
          }
          set({ nfts });
        } catch (error) {
          console.log(error);
          console.log('Error to get all nfts');
        }
      },

      mintNft: async (tokenURI: string, price: string) => {
        if (!tokenURI) return;
        const contract = await getContractMarketPlace();

        const priceFormatted = parsePriceToWei(Number(price), 'gwei');
        const tx = await contract
          .mintItem(tokenURI, priceFormatted)
          .then((res) => {
            console.log({ res }, 'transaction OK');
          })
          .catch((err) => console.log(err));
      },

      burnNft: async (id: number) => {
        const contract = await getContractMarketPlace();
        // const burn = await contract.burnNft(8);
      },

      getDetailNft: async (id: number) => {
        const contract = await getContractMarketPlace();
        const getNftItem = await contract.getNftItem(id);
        const tokenURI = getNftItem[0];

        const metadata = await getMetadataPinata(tokenURI);

        set({
          nftDetail: {
            ...metadata,
            id,
          },
        });
      },
    }),
    { name: 'nfts' }
  )
);

export default useBlockchainStore;
