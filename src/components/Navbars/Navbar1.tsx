import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../../utils/App.config';

type INavbarProps = {
  meta: ReactNode;
};

const Navbar1 = (props: INavbarProps) => (
  <div className="w-full px-1 text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-md">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="text-3xl font-bold text-gray-900">
            {AppConfig.site_name}
          </div>
        </div>
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  Home
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="border-none text-gray-700 hover:text-gray-900">
                  About
                </a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://github.com/shaishab/nest-next-mongo"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export { Navbar1 };