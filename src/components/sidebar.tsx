import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: FC = () => {
  const router = useRouter();

  const menuItems = [
    {
      href: '/views//home',
      as: '/',
      title: 'Home',
    },
    {
      href: '/views/about',
      as: '/about',
      title: 'About',
    },
    {
      href: '/views/blog',
      as: '/blog',
      title: 'Blog',
    },
  ];

  return (
    <div>
      <div className="rounded-full" style={{ marginBottom: 15 }}>
        <Link href="/home" as="/">
          <a
            style={{
              fontSize: 18,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            <img className="object-fill h-16 w-16" style={{marginLeft:'15%' }} src='/static/android-chrome-192x192.png' />
            Nest-Next-Mongo
          </a>
        </Link>
      </div>
      <div className='flex flex-col md:flex-row flex-1'>
        <aside className='bg-fuchsia-100 w-full md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, as, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href} as={as}>
                    <a
                      className={`flex p-2 bg-fuchsia-200 rounded hover:bg-fuchsia-400 cursor-pointer ${
                        router.asPath === href && 'bg-fuchsia-600 text-white'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* <div style={{ marginBottom: 15 }}>
      <div className="rounded-full">
        
        <Link href="/views/home" as="/">
          <a
            style={{
              fontSize: 18,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            <img className="object-fill h-16 w-16" style={{marginLeft:'15%' }} src='./static/android-chrome-192x192.png' />
            Nest-Next-Mongo
          </a>
        </Link>
      </div>
        
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link href="/views/home" as="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/views/about" as="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/views/blog" as="/blog" prefetch={false}>
            <a>Blog</a>
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Sidebar;
