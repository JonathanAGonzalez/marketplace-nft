import { useEffect } from 'react';
import { Title } from '../atoms/title/Title.tsx';
import { Card } from './Card/Card.tsx';
import useBlockchainStore from 'src/stores/blockchain.store.ts';

export const NftsLists = () => {
  const nfts = useBlockchainStore((store) => store.nfts);
  const isLoading = useBlockchainStore((store) => store.isLoading);
  const getAllNfts = useBlockchainStore((store) => store.getAllNfts);

  useEffect(() => {
    getAllNfts();
  }, []);

  return (
    <section className='max-w-[1400px] p-4 mx-auto'>
      <div className='border-b-[1px] border-t-[1px] border-gray-800 my-4 mb-9 py-4'>
        <Title variant='h2' color='text-white'>
          Last published
        </Title>
      </div>

      <div className='flex flex-wrap gap-4 justify-center'>
        {nfts.map((nft, i) => (
          <Card nft={nft} key={i} />
        ))}
      </div>
    </section>
  );
};
