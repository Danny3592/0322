import Logo from '@/app/_components/Logo';
import Navigation from '@/app/_components/Navigation';

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});



import '@/app/_styles/globals.css';
import Header from './_components/Header';

export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae facilis quasi quia sed explicabo rerum deserunt, sapiente impedit animi tempora voluptate velit qui? Incidunt quis doloribus ducimus eum, expedita tempora.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}  bg-primary-900  min-h-screen text-gray-50 flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8  py-12 ">
          <main className="max-w-7xl  mx-auto w-full"> {children}</main>
        </div>
      </body>
    </html>
  );
}
