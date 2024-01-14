import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import useStoreNfts from '../../../../stores/Nfts.store';
import { DetailContent } from '../../molecules/Detail/DetailContent';
import { ButtonCarrousel } from '../../atoms/buttons/ButtonCarrousel';

type DetailProps = {
  id: number;
};

export const Detail = ({ id }: DetailProps) => {
  const getDetail = useStoreNfts((store) => store.getDetailNft);
  const detailNft = useStoreNfts((store) => store.detailNft);

  useEffect(() => {
    getDetail(id);
  }, []);

  if (!detailNft)
    return (
      <div>
        <h3>The Nft not found</h3>
      </div>
    );

  const modelArrayImages = detailNft.imagesCarrousel.map((image) => {
    return {
      original: image.src,
      thumbnail: image.src,
    };
  });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-2'>
      <ImageGallery
        renderLeftNav={(onclick) => {
          return (
            <div onClick={onclick} className='absolute top-[50%] left-5 z-20'>
              <ButtonCarrousel side='left' />
            </div>
          );
        }}
        renderRightNav={(onclick) => (
          <div onClick={onclick} className='absolute top-[50%] right-5 z-20'>
            <ButtonCarrousel side='right' />
          </div>
        )}
        autoPlay
        showPlayButton={false}
        items={modelArrayImages}
      />
      <DetailContent nft={detailNft} />
    </div>
  );
};
