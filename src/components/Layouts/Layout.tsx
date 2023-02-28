import * as React from 'react';

import Header from '../Headers/Header'
import Footer from '../Footers/Footer'
import Sidebar from '../Sidebar/Sidebar';

// export default function Layout({ children }: { children: React.ReactNode }) {
  export default function Layout( children: any ) {
  // export default function Layout( props: any) {
  console.log("layout childrenn===", children);
  // console.log("layout props===", props);
  const { props } = children;
  return (
      <>
        <Header {...props} />
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