type TProfileImageProps = {
  src: string;
  alt: string;
};
export const ProfileImage = ({ src, alt }: TProfileImageProps) => {
  return (
    <div className='border rounded-full'>
      <img
        className='inline-block h-12 w-12 rounded-full ring-2 ring-white'
        src={src}
        alt={alt}
      />
    </div>
  );
};
