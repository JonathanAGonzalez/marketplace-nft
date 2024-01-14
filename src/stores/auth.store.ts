import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  initWeb3Auth,
  loginWithWeb3auth,
  logoutWithWeb3auth,
} from '../web3auth';

type AuthStore = {
  user: any | null;
  isLoading: boolean;
  loginUser: () => void;
  logoutUser: () => void;
  initWeb3auth: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isLoading: false,
      loginUser: async () => {
        try {
          set({ isLoading: true });
          const user = await loginWithWeb3auth();
          set({ user });
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
        set({ user: null });
      },
    }),
    { name: 'authStore' }
  )
);
