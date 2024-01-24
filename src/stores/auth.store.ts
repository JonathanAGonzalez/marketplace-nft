import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  initWeb3Auth,
  loginWithWeb3auth,
  logoutWithWeb3auth,
} from '../web3auth';

type AuthStore = {
  user: string | null;
  provider: null;
  isLoading: boolean;
  web3Auth: any;
  loginUser: () => void;
  logoutUser: () => void;
  initWeb3auth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      provider: null,
      web3Auth: null,
      loginUser: async () => {
        try {
          set({ isLoading: true });
          const { account, provider, web3Auth } = await loginWithWeb3auth();
          set({ user: account, provider, web3Auth });
        } catch (err) {
          console.log(err);
        } finally {
          set({ isLoading: false });
        }
      },
      initWeb3auth: async () => {
        await initWeb3Auth();
      },
      logoutUser: async () => {
        await logoutWithWeb3auth();
        set({ user: null, provider: null });
      },
    }),
    { name: 'authStore' }
  )
);
