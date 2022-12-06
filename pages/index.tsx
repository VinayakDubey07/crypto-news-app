import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
      <div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
        
        <h1 className="text-6xl text-primary font-bold mt-20">
          Crypto News <span className="text-active">App</span>
        </h1>
        <h2 className="text-active text-2xl mt-6">
          Next.js app which provides information latest news about Crypto using
          Cryptocurrency API
        </h2>
<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
<div className="mt-4 sm:mt-0 sm:ml-3">
  <button
    className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
  >
    Get Latest News
  </button>
</div>
</div>
</div>
);
}