import type { TNft } from '../../../../types/nft.type';
import { Paragraph } from '../../atoms/Paragraph';
import { ButtonWithCircleHover } from '../../atoms/buttons/ButtonWithCircleHover';
import { Title } from '../../atoms/title/Title';
import { DetailPrice } from './DetailPrice';
import { DetailProfileOwner } from './DetailProfileOwner';

type DetailContentProps = {
  nft: TNft;
};

export const DetailContent = ({ nft }: DetailContentProps) => {
  return (
    <div className='mt-9 md:mt-0 px-14'>
      <Title variant='h4'>{nft.name}</Title>
      <DetailPrice price={nft.price} stock={nft.stock} />
      <div className='border w-fit bg-blue-strong h-[100px] rounded-lg flex items-center p-4 mt-6'>
        <DetailProfileOwner image={nft.image} owner={nft.owner} />
      </div>
      <div className='my-4'>
        <Title variant='h5'>Description</Title>
        <Paragraph>{nft.description}</Paragraph>
        <div className='mt-4'>
          <ButtonWithCircleHover text='Mint' />
        </div>
      </div>
    </div>
  );
};
