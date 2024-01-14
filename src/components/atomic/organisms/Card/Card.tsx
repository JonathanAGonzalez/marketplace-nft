import { useState } from 'react';
import { CardContent } from './CardContent.tsx';
import { CardHeader } from './CardHeader.tsx';
import type { TNft } from '../../../../types/nft.type.ts';

type TCard = {
  nft: TNft;
};

export const Card = ({ nft }: TCard) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className='w-80 min-h-[465px] rounded-lg  bg-blue-strong text-white flex flex-col justify-between shadow-md '>
      <CardHeader
        id={nft.id}
        handleState={handleState}
        isOpen={isOpen}
        nft={nft}
      />
      <CardContent {...nft} />
    </article>
  );
};
