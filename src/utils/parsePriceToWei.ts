import { ethers } from 'ethers';

export const parsePriceToWei = (
  price: number,
  type: 'wei' | 'gwei' | 'ether'
) => {
  const priceInWei = ethers.parseUnits(price.toString(), type);
  return Number(priceInWei);
};
