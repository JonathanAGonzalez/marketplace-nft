type TitleProps = {
  children: React.ReactNode | string;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: string;
};

const H1 = 'h1';
const H2 = 'h2';
const H3 = 'h3';
const H4 = 'h4';
const H5 = 'h5';
const H6 = 'h6';

export const Title = ({
  children,
  variant,
  color = '',
  ...rest
}: TitleProps) => {
  switch (variant) {
    case H1:
      return (
        <h1 className={`text-[52px] font-bold ${color}`} {...rest}>
          {children}
        </h1>
      );
    case H2:
      return (
        <h2 className={`text-[40px] font-bold ${color}`} {...rest}>
          {children}
        </h2>
      );
    case H3:
      return (
        <h3 className={`text-[52px] font-bold ${color}`} {...rest}>
          {children}
        </h3>
      );
    case H4:
      return (
        <h4 className='text-[28px] text-white max-w-[400px] font-medium text-ellipsis overflow-hidden whitespace-nowrap'>
          {children}
        </h4>
      );
    case H5:
      return <h5 className='text-[20px] font-medium'>{children}</h5>;
    case H6:
      return <h6 className='text-[16px] font-medium'>{children}</h6>;
    default:
      return (
        <h3 className={`text-[52px] font-bold ${color}`} {...rest}>
          {children}
        </h3>
      );
  }
};
