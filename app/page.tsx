import Image from 'next/image';
import Link from 'next/link';

// generate 10 random numbers 0-100 in an array
const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between grow border-green-600 border p-4 bg-green-100'>
        <span className='my-2'>Main Slot</span>

    </main>
  );
}
