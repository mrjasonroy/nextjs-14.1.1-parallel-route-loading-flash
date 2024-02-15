export default async function Page({ params: { id } }: { params: { id: string } }) {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const res = await fetch(url);
  const todores = await res.json();
  const todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  } = todores;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="border-red-600 p-4 bg-red-50 m-4">
      <span className="my-2">Header Slot</span>
      <h1>{todo.title}</h1>
    </div>
  );
 }