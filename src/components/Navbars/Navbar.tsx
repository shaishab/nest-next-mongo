import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../../utils/App.config';

type INavbarProps = {
    children?: ReactNode;
};

const Navbar = (props: INavbarProps) => (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img className="w-8 h-8 mr-2 rounded-full" width="54" height="54" src="/static/android-chrome-192x192.png" alt="image description"></img>
            <Link href="/views/home" as="/">
                <a>
                    <span className="font-semibold text-xl tracking-tight">{AppConfig.site_name}</span>
                </a>
            </Link>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <img className="w-8 h-8 mr-2 rounded-full" width="54" height="54" src="/static/android-chrome-192x192.png" alt="image description"></img>
            </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                <Link href="/views/home" as="/">
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home
                    </a>
                </Link>
                <Link href="/views/about" as="/about">
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    About
                    </a>
                </Link>
                <Link href="/views/blog" as="/blog" prefetch={false}>                
                    <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                    Blog
                    </a>
                </Link>
            </div>
            <div>
                <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
            </div>
        </div>
    </nav>
);

export default Navbar;