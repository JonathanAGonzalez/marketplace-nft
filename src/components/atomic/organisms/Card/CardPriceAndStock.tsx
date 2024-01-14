type CardPriceAndStockProps = {
  price: number;
  stock: number;
};

export const CardPriceAndStock = ({ price, stock }: CardPriceAndStockProps) => {
  return (
    <div className='text-[15px] py-4 flex justify-between'>
      <p>
        Price:{' '}
        <span className='text-[15px] text-primary-purple'>{price} ETH</span>
      </p>
      <p>{stock} in stock</p>
    </div>
  );
};
