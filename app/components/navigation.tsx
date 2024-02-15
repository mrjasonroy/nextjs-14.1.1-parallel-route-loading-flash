'use client';

import Link from 'next/link';

const todoIds = [
  10,
  12,
  24,
  44,
  1,
  97,
  80
]

function Navigation() {
  return (
    <div className='flex flex-wrap justify-center flex-col'>
      {todoIds.map((i) => (
        <Link
          key={i}
          href={`/todo/${i}`}
          prefetch={false}
          className='m-2 p-4 bg-gray-100 rounded-md'
        >
          Todo {i}
        </Link>
      ))}
    </div>
  );
}

export { Navigation };
