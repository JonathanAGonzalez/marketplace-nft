type TInputProps = {
  label: string;
  id: string;
  type: React.InputHTMLAttributes<HTMLInputElement>['type'];
  onChange: (event: any) => void;
};

export const Input = ({ label, id, type, onChange }: TInputProps) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='text-white text-base'>
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        onChange={onChange}
        className='rounded-md outline-none p-2 bg-gray-800 text-white mt-2'
      />
    </div>
  );
};
