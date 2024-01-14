type TitleWithEllipsisProps = {
  text: string;
};

export const TitleWithEllipsis = ({ text }: TitleWithEllipsisProps) => {
  return (
    <h3 className='text-xl font-semibold text-white text-ellipsis overflow-hidden whitespace-nowrap'>
      {text}
    </h3>
  );
};
