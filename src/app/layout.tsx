import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/navbar/NavigationBar'
import Search from './components/svgs/Search'

import Link from "next/link";
import Image from "next/image";
import { Roboto, Montserrat, Poppins, Quicksand, Playfair_Display } from 'next/font/google'


const poppins = Poppins({
  weight:'400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

const quicksand = Quicksand({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-quicksand'
})
const playfair = Playfair_Display({
  weight: ['400','500','600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const roboto = Roboto({
  weight:'400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

const montserrat = Montserrat({
  weight:['400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: "Food App",
  description: "This application is created for shows some foods about bla bla restaurants",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable} ${poppins.variable} ${quicksand.variable} ${playfair.variable}`}>
      <body className="antialiased bg-gray-300/50">

        <div id="container" className="container mx-auto">

          <header className='font-poppins p-5 md:flex md:items-center md:justify-between shadow-lg hidden '>
            <h1 className="text-4xl font-playfair ml-10 tracking-widest">Food<span className="text-orange-400">-C-O</span></h1>
            <div className="flex items-center border px-2 rounded-lg bg-white">
              <Search width={32} height={32}/>
              <input type="text" name="searchBar" id="searchBar" className="p-2 outline outline-0" placeholder="Search" />
            </div>
            <Navbar/>
          </header>

          <main>
            {children}
          </main>

          <footer className="bg-gray-500/20">
              <section className="font-roboto flex flex-col items-center justify-between gap-y-10 py-5 ">
              <h1 className="text-4xl font-playfair ml-10 tracking-widest">Food<span className="text-orange-400">-C-O</span></h1>
              <ul className="flex gap-x-5 font-montserrat">
                  <li>Customer Services</li>
                  <li>Customer Services </li>
                  <li>Customer Services</li>
                </ul>
                <p className="">Copyright © 2022 Food -C-0 Malaysia. All Rights Reserved.</p>
              </section>
          </footer>
       
        </div>
      </body>
    </html>
  );
}
