type TInputFileProps = {
  file: File | null;
  label: string;
  id: string;
  onChange: (event: any) => void;
};

export const InputFile = ({ file, label, id, onChange }: TInputFileProps) => {
  return (
    <div className='flex flex-col'>
      {file && (
        <img
          src={window.URL.createObjectURL(file)}
          alt='file'
          className='h-[100px] w-[100px] object-cover rounded-md'
        />
      )}
      <label htmlFor={id} className='text-white text-base'>
        {label}
      </label>
      <input type='file' name={id} onChange={onChange} className='text-white' />
    </div>
  );
};
