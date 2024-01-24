type ButtonWithHoverProps = {
  text: string;
  onClick?: () => void;
};

export const ButtonWithCircleHover = ({
  text,
  onClick,
}: ButtonWithHoverProps) => {
  return (
    <button
      onClick={onClick}
      className='relative border hover:border-blue-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-blue-800 p-2 flex justify-center items-center font-extrabold'
    >
      <div className='absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-blue-900 delay-150 group-hover:delay-75'></div>
      <div className='absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-blue-800 delay-150 group-hover:delay-100'></div>
      <div className='absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-blue-700 delay-150 group-hover:delay-150'></div>
      <div className='absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-blue-600 delay-150 group-hover:delay-200'></div>
      <div className='absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-blue-500 delay-150 group-hover:delay-300'></div>
      <p className='z-10'>{text}</p>
    </button>
  );
};
