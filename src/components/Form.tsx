import { useState } from 'react';
import { pinFileToIPFS } from '../blockchain/events/pinFileToIPFS';
import useBlockchainStore from 'src/stores/blockchain.store';

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
    <form
      className='flex flex-col gap-4 max-w-[400px] border'
      onSubmit={handleSubmit}
    >
      <div className='flex flex-col'>
        <label htmlFor='name' className='text-white text-xl'>
          Name NFT
        </label>
        <input type='text' name='name' id='name' onChange={handleValues} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor='name' className='text-white text-xl'>
          PRICE
        </label>
        <input type='text' name='price' id='price' onChange={handleValues} />
      </div>

      <div className='flex flex-col'>
        {values.file && (
          <img
            src={window.URL.createObjectURL(values.file)}
            alt='foto'
            className='h-[100px] w-[100px]'
          />
        )}
        <label htmlFor='name' className='text-white text-xl'>
          ADD FILE
        </label>
        <input type='file' name='file' onChange={handleValues} />
      </div>
      <div className='flex flex-col'>
        <label htmlFor='name' className='text-white text-xl'>
          Description
        </label>
        <textarea
          name='description'
          id=''
          cols={30}
          rows={10}
          onChange={handleValues}
        ></textarea>
      </div>
      <button className='border p-4 bg-purple-950 rounded-lg' type='submit'>
        Agregar NFT
      </button>
    </form>
  );
};
