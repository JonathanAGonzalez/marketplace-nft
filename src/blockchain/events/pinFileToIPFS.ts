import axios from 'axios';

type TPinFileToIPFSResponse = {
  IpfsHash: string;
  PinSize: number;
  Timestamp: string;
  PinStatus: string;
};

type TFile =
  | {
      name: string;
      price: number;
      description: string;
      image: string;
    }
  | string;

export const pinFileToIPFS = async (
  file: TFile,
  type: 'JSON' | 'STRING'
): Promise<TPinFileToIPFSResponse> => {
  switch (type) {
    case 'JSON':
      const pinataMetadataJSON = JSON.stringify({
        pinataContent: file,
        name: 'NFT JSON',
      });

      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: `Bearer ${import.meta.env.PUBLIC_PINATA_API_KEY}`,
        },
        body: pinataMetadataJSON,
      };
      const result = await axios.post(
        'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        pinataMetadataJSON,
        options
      );
      return result.data;

    case 'STRING':
      let formData: any = new FormData();

      formData.append('file', file);

      const pinataMetadata = JSON.stringify({
        name: 'NFT Image',
      });

      formData.append('pinataMetadata', pinataMetadata);
      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      });

      formData.append('pinataOptions', pinataOptions);

      const res = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: `Bearer ${import.meta.env.PUBLIC_PINATA_API_KEY}`,
          },
        }
      );
      return res.data;
  }
};
