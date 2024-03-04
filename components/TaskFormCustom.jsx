
'use client'
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";
import { useFormStatus, useFormState } from 'react-dom';
import { toast } from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='join-item btn btn-primary'
      disabled={pending}
    >
      {pending ? 'Please wait..' : 'Create task'}
    </button>
  );
};

const initialState = {
  error: false,
  message: null,
};

const TaskFormCustom = () => {

  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (!state.message) return;
    if (state.error) {
      toast.error('There was an error');
      return;
    }
    toast.success('task created');
  }, [state]);

  return (
    <form action={formAction}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='Type here'
          name='content'
          required
        />
        <SubmitBtn />
      </div>
    </form>
  )
}

export default TaskFormCustom