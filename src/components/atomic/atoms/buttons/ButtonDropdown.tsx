type ButtonDropdownProps = {
  handleState: () => void;
};

export const ButtonDropdown = ({ handleState }: ButtonDropdownProps) => {
  return (
    <button
      id='dropdownMenuIconButton'
      data-dropdown-toggle='dropdownDots'
      data-dropdown-placement='bottom-start'
      className='inline-flex self-center items-center p-2 text-sm font-medium text-center text-blue-light bg-[#222] rounded-lg hover:bg-blue-light focus:ring-4 focus:outline-none  focus:ring-gray-50 '
      type='button'
      onClick={handleState}
    >
      <svg
        className='w-4 h-4  text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 4 15'
      >
        <path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
      </svg>
    </button>
  );
};
