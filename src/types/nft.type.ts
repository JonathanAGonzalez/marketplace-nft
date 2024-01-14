export type TNft = {
  id: number;
  name: string;
  owner: string;
  description: string;
  price: number;
  stock: number;
  image: Image;
};

export type Image = {
  src: string;
  alt: string;
  extension: string;
};

export type ImagesCarrousel = {
  id: number;
  src: string;
  alt: string;
  extension: string;
  isSelected?: boolean;
};
