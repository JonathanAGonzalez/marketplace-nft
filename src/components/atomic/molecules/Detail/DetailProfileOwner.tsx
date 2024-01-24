import { ProfileImage } from '../../atoms/profile/ProfileImage';
import { OwnerName } from '../../atoms/owner/OwnerName';

type TDetailProfileOwnerProps = {
  image: string;
  alt: string;
  owner: string;
};

export const DetailProfileOwner = ({
  image,
  alt,
  owner,
}: TDetailProfileOwnerProps) => {
  return (
    <div className='flex items-center gap-4'>
      <ProfileImage alt={alt} src={image} />
      <OwnerName owner={owner} />
    </div>
  );
};
