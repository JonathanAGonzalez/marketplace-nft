import { useState } from 'react';
import { pinFileToIPFS } from '../blockchain/events/pinFileToIPFS';
import { Input } from './atomic/atoms/Input';
import { Textarea } from './atomic/atoms/Textarea';
import { InputFile } from './atomic/molecules/InputFile';
import { ButtonWithCircleHover } from './atomic/atoms/buttons/ButtonWithCircleHover';
import useBlockchainStore from 'src/stores/blockchain.store';
import { Spinner } from './atomic/atoms/Spinner';

type TStateValues = {
  name: string;
  file: File | null;
  price: string;
  description: string;
};

export const Form = () => {
  const initialValues = {
    name: '',
    file: null,
    price: '0',
    description: '',
  };

  const [values, setValues] = useState<TStateValues>(initialValues);
  const [hashIPFS, setHashIpfs] = useState<string>('');
  const mintNft = useBlockchainStore((store) => store.mintNft);
  const isLoading = useBlockchainStore((store) => store.isLoading);

  const handleValues = async (event: any) => {
    const { name, value } = event.target;
    if (name === 'file') {
      const result: any = await pinFileToIPFS(event.target.files[0], 'STRING');
      setHashIpfs(result.IpfsHash);
      setValues({
        ...values,
        file: event.target.files[0],
      });
      return;
    }
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, price, description } = values;

    try {
      const IPFSHashJSON = await pinFileToIPFS(
        { name, price: Number(price), description, image: hashIPFS },
        'JSON'
      ).catch((err) => console.log(err));
      if (!IPFSHashJSON) return;

      mintNft(IPFSHashJSON.IpfsHash, price);
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <form className='flex flex-col gap-4 p-4 ' onSubmit={handleSubmit}>
      <Input id='name' label='Name NFT' type='text' onChange={handleValues} />
      <Input id='price' label='Price' type='text' onChange={handleValues} />
      <InputFile
        file={values.file}
        label='Add File'
        id='file'
        onChange={handleValues}
      />

      <Textarea id='description' label='Description' onChange={handleValues} />
      <ButtonWithCircleHover
        text={
          isLoading ? (
            <>
              <Spinner /> Loading...
            </>
          ) : (
            'Mint NFT'
          )
        }
      />
    </form>
  );
};
