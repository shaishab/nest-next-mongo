"use strict";
import * as React from 'react';

import Header from '../Headers/Header'
import Footer from '../Footers/Footer'
import Sidebar from '../Sidebar/Sidebar';
import {AppConfig} from '../../utils/App.config';

// export default function Layout({ children }: { children: React.ReactNode }) {
  export default function Layout( children: any ) {
  // export default function Layout( props: any) {
  // console.log("layout childrenn===", children);
  // console.log("layout childrenn===", children.children);
  // console.log("layout props===", props);
  children = children.children? children.children:children;
  // console.log("layout children===", children);
//  const headerData = children.children? children.children.props:children;
 const headerData = children.props? children.props:children;
  // const { props } = children.children? children.children:children;
  // console.log("headrData on layout====", headerData);
  const meta = headerData.meta? headerData.meta : AppConfig;
  // Object.assign({}, headrProps, meta);
  let headerProps = Object.assign({}, headerData, {meta:meta});
  // console.log("headerProps on layout====", headerProps);
  return (
      <>
        <Header {...headerProps} />
        <main className="min-h-[75vh] w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
          <section className="hidden sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4 md:block">
            <Sidebar/>
          </section>
          <section role="main" className="w-full h-full flex-grow p-3 overflow-auto">
            {children}
          </section>
        </main>
        <Footer />
      </>
  );
};