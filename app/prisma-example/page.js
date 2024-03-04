import React from 'react'
import prisma from '@/utils/db';

const prismaHandlers = async () => {
  console.log('Prisma example');
  // await prisma.task.create({
  //   data: {
  //     content: 'Testing'
  //   }
  // })
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    }
  });
  return allTasks;
};

const PrismaExamplePage = async () => {

  const tasks = await prismaHandlers();

  if (!tasks.length) return <h1 className='mt-8 font-medium text-lg'>No tasks found</h1>

  return (
    <div>
      PrismaExamplePage
      {tasks.map(task => (
        <h2 key={task.id}>{task.content}</h2>
      ))}
    </div>
  )
}

export default PrismaExamplePage