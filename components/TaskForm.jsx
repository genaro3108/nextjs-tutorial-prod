
import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className='join w-full'>
        <input
          type='text'
          className='input input-bordered join-item w-full'
          placeholder='Type here'
          name='content'
          required
        />
        <button
          type='submit'
          className='join-item btn btn-primary'
        >
          Create task
        </button>
      </div>
    </form>
  )
}

export default TaskForm