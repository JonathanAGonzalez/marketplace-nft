import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { DetailContent } from '../../molecules/Detail/DetailContent';
import { ButtonCarrousel } from '../../atoms/buttons/ButtonCarrousel';
import useBlockchainStore from 'src/stores/useBlockchainStore';
type DetailProps = {
  id: number;
};

export const Detail = ({ id }: DetailProps) => {
  const getDetailNft = useBlockchainStore((store) => store.getDetailNft);
  const nftDetail = useBlockchainStore((store) => store.nftDetail);

  useEffect(() => {
    getDetailNft(id);
  }, []);

  if (!nftDetail)
    return (
      <div>
        <h3>The Nft not found</h3>
      </div>
    );

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 border'>
      <div className='border max-h-[700px] object-contain'>
        <ImageGallery
          showThumbnails={false}
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
          additionalClass='md:h-[700px] lg:h-[700px]'
          items={[
            {
              original: nftDetail.image,
              thumbnail: nftDetail.image,
            },
          ]}
        />
      </div>

      <DetailContent nft={nftDetail} />
    </div>
  );
};
