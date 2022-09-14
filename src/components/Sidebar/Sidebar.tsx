import { FC } from 'react';
import Link from 'next/link';

const Sidebar: FC = () => {
  return (
    <>
    <div className="bg-gray-50 rounded-xl border my-3 w-full">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <Link href="/views/home" as="/">
              <a className="truncate">
                <img className="w-16 h-16 rounded-full" style={{marginLeft:'35%' }} src="/static/android-chrome-192x192.png" alt="image description"></img>
                <span className="block text-indigo-600 overflow-ellipsis">Nest-Next-Mongo</span>
              </a>
            </Link>
        </h2>
      </div>
    </div>
    <div className="sticky top-0 p-4 bg-gray-100 rounded-xl w-full">
      <ul className="flex sm:flex-col overflow-hidden content-center justify-between">
          <li className="py-2 hover:bg-indigo-300 rounded">
            <Link href="/views/home" as="/">
              <a className="truncate">
                  <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/home.svg" className="w-7 sm:mx-2 mx-4 inline" />
                  <span className="hidden sm:inline">Home</span>
              </a>
            </Link>
          </li>
          <li className="py-2 hover:bg-indigo-300 rounded">
            <Link href="/views/about" as="/about">
              <a className="truncate">
                  <img src="//cdn.jsdelivr.net/npm/heroicons@1.0.1/outline/cog.svg" className="w-7 sm:mx-2 mx-4 inline" /> <span className="hidden sm:inline">About</span>
              </a>
            </Link>
          </li>
          <li className="py-2 hover:bg-indigo-300 rounded">
            <Link href="/views/blog" as="/blog" prefetch={false}>
              <a className="">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg> <span className="hidden sm:inline">Blog</span>
              </a>
            </Link>
              
          </li>
      </ul>
    </div>
    
    </>
    
  );
};

export default Sidebar;
