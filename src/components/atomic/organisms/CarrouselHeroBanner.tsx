import { Carousel } from 'flowbite-react';

import { Title } from '../atoms/title/Title.tsx';
import { Paragraph } from '../atoms/Paragraph.tsx';

const dataCarrousel = [
  {
    id: 1,
    title: 'Digital Art, Collect and Sell Your NFTs.',
    description:
      'We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.',
    img: '/images/hero-banner/1.jpg',
  },
  {
    id: 2,
    title: 'Digital Art, Collect and Sell Your NFTs.',
    description:
      'We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.',
    img: '/images/hero-banner/1.jpg',
  },
  {
    id: 3,
    title: 'Digital Art, Collect and Sell Your NFTs.',
    description:
      'We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.',
    img: '/images/hero-banner/1.jpg',
  },
  {
    id: 4,
    title: 'Digital Art, Collect and Sell Your NFTs.',
    description:
      'We know this in our gut, but what can we do about it? How can we motivate ourselves? One of the most difficult aspects of achieving success is staying motivated over the long haul.',
    img: '/images/hero-banner/1.jpg',
  },
];

type CarrouselHeroBannerProps = {
  children: React.ReactNode;
};

export const CarrouselHeroBanner = ({ children }: CarrouselHeroBannerProps) => {
  return (
    <Carousel pauseOnHover className='lg:h-[calc(80vh-137px)] '>
      {dataCarrousel.map((item) => (
        <div className='flex gap-4 items-center' key={item.id}>
          <div className='pl-16 flex-1 text-white'>
            <Title variant='h1'>{item.title}</Title>
            <Paragraph>{item.description}</Paragraph>
            <div className='py-4'>{children}</div>
          </div>

          <figure className='flex-1'>
            <img className='flex-1 block' src={item.img} alt={item.title} />
          </figure>
        </div>
      ))}
    </Carousel>
  );
};
