import { Link } from '../atoms/Link';
import { UnOrderList } from '../atoms/UnorderList';
import { useAuthStore } from '../../../stores/auth.store';
import { truncateEthAddress } from '../../../utils/truncate';
import { Spinner } from '../atoms/Spinner';

const itemsMenu = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Explorer',
    path: '/explorer',
  },
  {
    id: 4,
    name: 'Contact',
    path: '/contact',
  },
];

export const Menu = () => {
  const login = useAuthStore((store) => store.loginUser);
  const user = useAuthStore((store) => store.user);
  const isLoading = useAuthStore((store) => store.isLoading);
  const logoutUser = useAuthStore((store) => store.logoutUser);

  return (
    <nav>
      <UnOrderList>
        {itemsMenu.map(({ id, name, path }) => (
          <li key={id}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
        {user ? (
          <button
            onClick={() => logoutUser()}
            className='p-2 rounded-lg bg-blue-500 text-white hover:text-white'
          >
            {truncateEthAddress(user)}
          </button>
        ) : (
          <button
            onClick={login}
            disabled={isLoading}
            className='p-2 rounded-lg bg-blue-500 text-white hover:text-white'
          >
            {isLoading ? (
              <>
                <Spinner />
                Loading...
              </>
            ) : (
              'Wallet Connect'
            )}
          </button>
        )}
      </UnOrderList>
    </nav>
  );
};
