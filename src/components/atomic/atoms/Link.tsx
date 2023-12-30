type TLinkProps = {
  children: React.ReactNode;
  href: string;
};
export const Link = ({ children, href, ...rest }: TLinkProps) => {
  return (
    <a
      href={href}
      {...rest}
      className='text-white font-medium hover:text-primary-purple transition-all duration-500'
    >
      {children}
    </a>
  );
};
