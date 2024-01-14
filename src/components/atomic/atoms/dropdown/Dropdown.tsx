export const Dropdown = () => {
  return (
    <div
      id='dropdownDots'
      className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600'
    >
      <ul
        className='py-2 text-sm text-gray-700 dark:text-gray-200'
        aria-labelledby='dropdownMenuIconButton'
      >
        <li>
          <a
            href='#'
            className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
          >
            Share
          </a>
        </li>
      </ul>
    </div>
  );
};
