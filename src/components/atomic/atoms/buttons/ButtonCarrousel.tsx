import { IconArrowLeft } from '../icons/IconArrowLeft';
import { IconArrowRight } from '../icons/IconArrowRight';

type ButtonCarrouselProps = {
  side: 'right' | 'left';
  classes?: string;
};

export const ButtonCarrousel = ({ side, classes }: ButtonCarrouselProps) => {
  const renderIcon = () => {
    switch (side) {
      case 'left':
        return <IconArrowLeft />;

      case 'right':
        return <IconArrowRight />;

      default:
        return <IconArrowRight />;
    }
  };

  return (
    <button
      className={`rounded-full border-2 border-blue-strong p-2 hover:bg-white hover:text-black transition-all duration-300 ${classes}`}
    >
      {renderIcon()}
    </button>
  );
};
