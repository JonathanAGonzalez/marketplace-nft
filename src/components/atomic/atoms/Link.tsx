type TLinkProps = {
  children: React.ReactNode;
  href: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  aditonalClass?: string;
};

export const Link = ({
  children,
  href,
  onClick,
  aditonalClass,
  ...rest
}: TLinkProps) => {
  return (
    <a
      href={href}
      {...rest}
      onClick={onClick}
      className={`text-white font-medium hover:text-primary-purple transition-all duration-500 ${aditonalClass}`}
    >
      {children}
    </a>
  );
};
