import { ProfileImage } from '../../atoms/profile/ProfileImage';
import { OwnerName } from '../../atoms/owner/OwnerName';

type TDetailProfileOwnerProps = {
  image: {
    src: string;
    alt: string;
  };
  owner: string;
};

export const DetailProfileOwner = ({
  image,
  owner,
}: TDetailProfileOwnerProps) => {
  return (
    <div className='flex items-center gap-4'>
      <ProfileImage alt={image.alt} src={image.src} />
      <OwnerName owner={owner} />
    </div>
  );
};
