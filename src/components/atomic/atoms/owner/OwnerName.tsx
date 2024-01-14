type TOwnerNameProps = {
  owner: string;
};

export const OwnerName = ({ owner }: TOwnerNameProps) => {
  return (
    <div>
      <p>Owner by</p>
      <p className='text-blue-light block'>{owner}</p>
    </div>
  );
};
