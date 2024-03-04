'use server';
import prisma from '@/utils/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTasks = async () => await prisma.task.findMany({
  orderBy: {
    createdAt: 'desc'
  }
});

export const createTask = async (formData) => {
  const content = formData.get('content');
  await prisma.task.create({ data: { content } });
  revalidatePath('/tasks');
};

export const createTaskCustom = async (prevState, formData) => {
  //await new Promise((resolve) => setTimeout(() => resolve(), 1500));
  const content = formData.get('content');
  const Task = z.object({
    content: z.string().min(5),
  })
  try {
    Task.parse({ content });
    await prisma.task.create({ data: { content } });
    revalidatePath('/tasks');
    return { message: 'success' };
  } catch (error) {
    return { error: true, message: error.message }
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get('id');
  await new Promise((resolve) => setTimeout(() => resolve(), 1500));
  await prisma.task.delete({ where: { id } });
  revalidatePath('/tasks');
};

export const getTask = async (id) => prisma.task.findUnique({ where: { id } });

export const editTask = async (formData) => {
  const id = formData.get('id');
  const completed = formData.get('completed');
  const content = formData.get('content');

  await prisma.task.update({
    where: { id },
    data: {
      completed: completed === 'on' ? true : false,
      content
    }
  })
  redirect('/tasks');
};
