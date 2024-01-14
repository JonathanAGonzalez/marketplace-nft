import { Carousel } from 'flowbite-react';

export const Slide = () => {
  return (
    <div className='w-[300px] border h-[300px]'>
      <Carousel indicators={false}>
        <img
          src='https://themes.potenzaglobalsolutions.com/html/nofty/images/product/02.jpg'
          alt='...'
        />
        <img
          src='https://themes.potenzaglobalsolutions.com/html/nofty/images/product/01.jpg'
          alt='...'
        />
        <img
          src='https://themes.potenzaglobalsolutions.com/html/nofty/images/product/02.jpg'
          alt='...'
        />
        <img
          src='https://themes.potenzaglobalsolutions.com/html/nofty/images/product/02.jpg'
          alt='...'
        />
        <img
          src='https://themes.potenzaglobalsolutions.com/html/nofty/images/product/02.jpg'
          alt='...'
        />
        <img
          src='https://themes.potenzaglobalsolutions.com/html/nofty/images/product/02.jpg'
          alt='...'
        />
      </Carousel>
    </div>
  );
};
