type TTextareaProps = {
  label: string;
  id: string;
  onChange: (event: any) => void;
};

export const Textarea = ({ label, id, onChange }: TTextareaProps) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='text-white text-base'>
        {label}
      </label>
      <textarea
        className='rounded-md outline-none p-2 bg-gray-800 text-white mt-2'
        name={id}
        id={id}
        cols={30}
        rows={10}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
