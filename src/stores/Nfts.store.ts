import { create } from 'zustand';
import type { ImagesCarrousel } from '../types/nft.type';

const initialState = {
  nfts: [
    {
      id: 1,
      name: 'NFT 1',
      owner: '0x123456789',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      price: 0.1,
      stock: 1,
      image: {
        src: '/images/nft/1.jpg',
        alt: 'NFT 1',
        extension: 'jpg',
      },
      imagesCarrousel: [
        {
          id: 1,
          src: '/images/nft/1.jpg',
          alt: 'NFT 1',
          extension: 'jpg',
        },
      ],
    },
    {
      id: 2,
      name: 'NFT 2',
      owner: '0x123456789',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      price: 0.1,
      stock: 1,
      image: {
        src: '/images/nft/2.jpg',
        alt: 'NFT 1',
        extension: 'jpg',
      },
      imagesCarrousel: [
        {
          id: 1,
          src: '/images/nft/2.jpg',
          alt: 'NFT 1',
          extension: 'jpg',
        },
        {
          id: 2,
          src: '/images/nft/1.jpg',
          alt: 'NFT 1',
          extension: 'jpg',
        },
        {
          id: 3,
          src: '/images/nft/3.jpg',
          alt: 'NFT 1',
          extension: 'jpg',
        },
      ],
    },
    {
      id: 3,
      name: 'NFT 3',
      owner: '0x123456789',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      price: 0.1,
      stock: 1,
      image: {
        src: '/images/nft/3.jpg',
        alt: 'NFT 1',
        extension: 'jpg',
      },
      imagesCarrousel: [
        {
          id: 1,
          src: '/images/nft/3.jpg',
          alt: 'NFT 1',
          extension: 'jpg',
        },
      ],
    },
    {
      id: 4,
      name: 'NFT 4',
      owner: '0x123456789',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      price: 0.1,
      stock: 1,
      image: {
        src: '/images/nft/4.jpg',
        alt: 'NFT 1',
        extension: 'jpg',
      },
      imagesCarrousel: [
        {
          id: 1,
          src: '/images/nft/4.jpg',
          alt: 'NFT 1',
          extension: 'jpg',
        },
      ],
    },
  ],
  detailNft: null,
};

type Nft = {
  id: number;
  name: string;
  description: string;
  owner: string;
  price: number;
  stock: number;
  image: {
    src: string;
    alt: string;
    extension: string;
  };
  imagesCarrousel: ImagesCarrousel[];
};

type NftsStore = {
  nfts: Nft[];
  detailNft: Nft | null;
  removeNft: (id: number) => void;
  getDetailNft: (id: number) => void;
};

const useStoreNfts = create<NftsStore>()((set) => ({
  nfts: initialState.nfts,
  detailNft: initialState.detailNft,
  removeNft: (id: number) =>
    set((state) => ({
      nfts: state.nfts.filter((nft) => nft.id !== id),
    })),
  getDetailNft: (id: number) => {
    const nft = initialState.nfts.find((nft) => nft.id === id);
    if (nft) {
      set(() => ({
        detailNft: nft,
      }));
    }
  },
}));

export default useStoreNfts;
