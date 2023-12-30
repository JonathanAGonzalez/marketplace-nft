import { Link } from '../atoms/Link';
import { UnOrderList } from '../atoms/UnorderList';

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
  {
    id: 5,
    name: 'Connect Wallet',
    path: '/connect-wallet',
  },
];

export const Menu = () => {
  return (
    <nav>
      <UnOrderList>
        {itemsMenu.map(({ id, name, path }) => (
          <li key={id}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </UnOrderList>
    </nav>
  );
};
