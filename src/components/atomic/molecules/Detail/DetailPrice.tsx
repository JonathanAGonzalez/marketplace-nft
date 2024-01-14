type TDetailPrice = {
  price: number;
  stock: number;
};

export const DetailPrice = ({ price, stock }: TDetailPrice) => {
  return (
    <p className='mt-4'>
      Price: <span className='text-blue-light'>{price} - </span>
      {stock} available
    </p>
  );
};
