import Link from 'next/link';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

import Meta from '../Meta/Meta';
// import Navbar from '../Navbars/Navbar';
const Navbar = dynamic(import('../Navbars/Navbar'), {
  ssr: false
});

type INavbarProps = {
  meta?: {
    title: string;
    description: string;
    slug?: string;
    canonical?: string;
  },
  children?: ReactNode;
};

const Header = (props: INavbarProps) => (
  <>
    <Meta {...props.meta}/>
    <Navbar {...props}/>
  </>
    
);

export default Header;