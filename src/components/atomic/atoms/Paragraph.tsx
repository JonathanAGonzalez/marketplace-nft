type ParagraphProps = {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
};

export const Paragraph = ({ children, size }: ParagraphProps) => {
  const renderSize = (size: string) => {
    switch (size) {
      case 'small':
        return 'text-[18px]';
      case 'medium':
        return 'text-[24px]';
      case 'large':
        return 'text-[32px]';
      default:
        return 'text-[16px]';
    }
  };

  return (
    <p className={`text-[#e2e2e2]  leading-7 ${size ? renderSize(size) : ''}`}>
      {children}
    </p>
  );
};
