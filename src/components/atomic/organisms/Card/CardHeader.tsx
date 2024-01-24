import type { TNft } from '../../../../types/nft.type.ts';
import { ButtonDropdown } from '../../atoms/buttons/ButtonDropdown.tsx';
import { Dropdown } from '../../atoms/dropdown/Dropdown.tsx';
import { IconHeart } from '../../atoms/icons/IconHeart.tsx';

type CardHeaderProps = {
  handleState: () => void;
  isOpen: boolean;
  nft: TNft;
  id: number;
};

export const CardHeader = ({
  handleState,
  isOpen,
  nft,
  id,
}: CardHeaderProps) => {
  const handleRedirect = () => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <header className='relative min-h-[230px] rounded-t-lg cursor-pointer'>
      <figure className='overflow-hidden rounded-t-lg max-h-[320px]'>
        <img
          onClick={handleRedirect}
          src={nft.image}
          alt={nft.name}
          title={nft.name}
          className='transition-transform transform-gpu duration-200 hover:scale-110'
        />
        <button className='absolute right-4 top-5 rounded-md bg-white p-2 text-[#222] '>
          <IconHeart fill={false} />
        </button>
      </figure>

      <div className=''>
        <div className='absolute -bottom-4 right-4'>
          <ButtonDropdown handleState={handleState} />
        </div>
        <div
          onMouseLeave={handleState}
          className={`absolute right-0 -bottom-20 ${!isOpen ? 'hidden' : ''}`}
        >
          <Dropdown />
        </div>
      </div>
    </header>
  );
};
