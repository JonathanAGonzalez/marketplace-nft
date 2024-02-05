import { Form } from 'src/components/Form';
import { SidebarDashboard } from '../../molecules/Dashboard';

export const FormMint = () => {
  return (
    <div className='rounded-xl grid grid-cols-2 border overflow-hidden'>
      <SidebarDashboard />
      <Form />
    </div>
  );
};
