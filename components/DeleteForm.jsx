'use client';

import { useFormStatus } from 'react-dom';
import { deleteTask } from '@/utils/actions'


const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className='btn btn-xs btn-error'
    >
      {pending ? 'Pending..' : 'Delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form
      action={deleteTask}
    >
      <input type='hidden' name='id' value={id} />
      <SubmitBtn />
    </form>
  )
}

export default DeleteForm