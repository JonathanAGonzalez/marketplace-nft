import { Logo } from '../atoms/Logo';
import { Menu } from './Menu';

export const Header = () => {
  return (
    <header className='flex items-center justify-between p-6'>
      <Logo />
      <Menu />
    </header>
  );
};
