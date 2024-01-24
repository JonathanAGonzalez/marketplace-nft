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
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYmY1YWQ2MC0xZDk0LTQ1MGQtOTMwZS0yMzhlN2JjMzdkNzgiLCJlbWFpbCI6ImpvbmF0aGFuZ0Bob3RtYWlsLmNvbS5hciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI3MmFjNThjZDVmNWM4YTJiYzQ0NiIsInNjb3BlZEtleVNlY3JldCI6IjkyNjg2YzZlNTI3MjgxOTBkMTIwNTI2Mzc2YzZkM2RmZDkxY2NhZTg2NzdlYzYzNDZlZDlkYmY3MWNiNzYwMWUiLCJpYXQiOjE3MDU1MDE3MzN9.nP6QaEjulXIEHqZYbesLkqdOk3PpyutwqwVPzN7dQts',
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
