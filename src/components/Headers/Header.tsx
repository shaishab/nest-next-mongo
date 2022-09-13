import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../../utils/App.config';
import Meta from '../Meta/Meta';
import Navbar from '../Navbars/Navbar';

type INavbarProps = {
  meta: ReactNode;
};

const Header = (props: INavbarProps) => (
  <>
    <Meta {...props}/>
    <Navbar {...props}/>
  </>
    
);

export default Header;