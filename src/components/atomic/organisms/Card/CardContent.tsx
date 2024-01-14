import { TitleWithEllipsis } from '../../atoms/title/TitleWithEllipsis.tsx';
import { CardPriceAndStock } from './CardPriceAndStock.tsx';

type TCardContent = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

export const CardContent = ({ id, name, price, stock }: TCardContent) => {
  return (
    <div className='pt-8 pb-7 px-4'>
      <div>
        <TitleWithEllipsis text={name} />
        <CardPriceAndStock price={price} stock={stock} />
      </div>
      <hr className='bg-gray-900' />
      <div className='flex justify-end pt-4 '>
        <a
          href={`/detail/${id}`}
          className='bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600'
        >
          Go to detail
        </a>
      </div>
    </div>
  );
};
