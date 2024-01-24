export type TNft = {
  id: number;
  name: string;
  owner: string;
  description: string;
  price: number;
  stock: number;
  image: string;
};

export type ImagesCarrousel = {
  id: number;
  src: string;
  alt: string;
  extension: string;
  isSelected?: boolean;
};
