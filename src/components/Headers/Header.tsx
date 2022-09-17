import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../../utils/App.config';
import Meta from '../Meta/Meta';
import Navbar from '../Navbars/Navbar';
import Navbar1 from '../Navbars/Navbar1';
import Navbar2 from '../Navbars/Navbar2';
import Navbar3 from '../Navbars/Navbar3';

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
    <Navbar3 {...props}/>
  </>
    
);

export default Header;