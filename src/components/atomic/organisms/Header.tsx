import { useEffect } from 'react';
import { Logo } from '../atoms/Logo';
import { Menu } from './Menu';
import { useAuthStore } from '../../../stores/auth.store';

export const Header = () => {
  const initWeb3Auth = useAuthStore((store) => store.initWeb3auth);

  useEffect(() => {
    (async () => {
      initWeb3Auth();
    })();
  }, []);
  return (
    <header className='flex items-center justify-between p-6'>
      <Logo />
      <Menu />
    </header>
  );
};
