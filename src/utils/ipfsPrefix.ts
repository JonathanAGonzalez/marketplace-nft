import { URI_IPFS_BASE } from '../ENUM/URI_IPFS_BASE';

type TIpfsPrefix = string;

export const ipfsPrefix = (hash: TIpfsPrefix): TIpfsPrefix => {
  return `${URI_IPFS_BASE}/${hash}`;
};
