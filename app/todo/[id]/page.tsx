export default async function Page({ params: { id } }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todores = await res.json();
  const todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  } = todores;
  await new Promise((resolve) => setTimeout(resolve, 300));
  return (
    <main className='flex flex-col items-center justify-between grow border-green-600 border p-4 bg-green-100'>
      <span className='my-2'>Main Slot</span>
      <p>Id: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>User Id: {todo.userId}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
    </main>
  );
}
