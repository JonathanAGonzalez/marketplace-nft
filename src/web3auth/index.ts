import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES } from '@web3auth/base';
import { MetamaskAdapter } from '@web3auth/metamask-adapter';

const clientId = import.meta.env.PUBLIC_WEB3_AUTH_CLIENT_ID;

const web3Auth = new Web3Auth({
  clientId,
  web3AuthNetwork: 'sapphire_devnet',
  enableLogging: true,
  sessionTime: 3600,
  storageKey: 'local',
  chainConfig: {
    chainId: '0xaa36a7',
    rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    displayName: 'Sepolia Testnet',
  },
  uiConfig: {
    appName: 'SARASITA',
    loginMethodsOrder: ['metamask'],
  },
});

export const initWeb3Auth = async () => {
  try {
    const metamaskAdapter = new MetamaskAdapter({
      clientId,
      sessionTime: 3600,
      web3AuthNetwork: 'sapphire_devnet',
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0xaa36a7',
        rpcTarget: 'https://rpc.ankr.com/eth_sepolia',
      },
    });
    metamaskAdapter.setAdapterSettings({
      sessionTime: 86400,
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0xaa36a7',
        rpcTarget: ' https://rpc.ankr.com/eth_sepolia',
      },
      web3AuthNetwork: 'sapphire_devnet',
    });
    web3Auth.configureAdapter(metamaskAdapter);

    await web3Auth.initModal({
      modalConfig: {
        openlogin: {
          label: 'openlogin',
          loginMethods: {
            facebook: {
              name: 'facebook',
              showOnModal: false,
            },
            reddit: {
              name: 'reddit',
              showOnModal: false,
            },
            email_passwordless: {
              name: 'email_passwordless',
              showOnModal: false,
            },
            sms_passwordless: {
              name: 'sms_passwordless',
              showOnModal: false,
            },
            twitter: {
              name: 'twitter',
              showOnModal: false,
            },
            github: {
              name: 'github',
              showOnModal: false,
            },
            twitch: {
              name: 'twitch',
              showOnModal: false,
            },
            // google: {
            //   name: 'google',
            //   showOnModal: false,
            // },
            discord: {
              name: 'discord',
              showOnModal: false,
            },
            // twitch: {
            //   name: 'twitch',
            //   showOnModal: false,
            // },
            apple: {
              name: 'apple',
              showOnModal: false,
            },
            line: {
              name: 'line',
              showOnModal: false,
            },
            wechat: {
              name: 'wechat',
              showOnModal: false,
            },
            weibo: {
              name: 'weibo',
              showOnModal: false,
            },
            linkedin: {
              name: 'linkedin',
              showOnModal: false,
            },
            yahoo: {
              name: 'yahoo',
              showOnModal: false,
            },
            kakao: {
              name: 'kakao',
              showOnModal: false,
            },
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginWithWeb3auth = async () => {
  try {
    const web3authProvider = await web3Auth.connect();

    if (web3Auth.connected) {
      try {
        const accounts: any = await web3authProvider?.request({
          method: 'eth_requestAccounts',
        });
        if (!accounts) return console.log('accounts is null');

        console.log('connected');
        return accounts[0];
      } catch (error) {
        console.log(error);
      }
    }
    return web3authProvider;
  } catch (error) {
    console.log(error);
  }
};

export const logoutWithWeb3auth = async () => {
  try {
    await web3Auth.logout();
  } catch (error) {
    console.log(error);
  }
};
