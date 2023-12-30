type TUnOrderListProps = {
  children: React.ReactNode;
};

export const UnOrderList = ({ children }: TUnOrderListProps) => {
  return <ul className='flex gap-4'>{children}</ul>;
};
