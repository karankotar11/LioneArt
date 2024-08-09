'use client'
// components/Header.js
import { AlignJustify, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';



const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef =useRef(null)
  const toggleMenu = () => {
    setShowMenu(prevState => !prevState);
  };
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };
  // const handleScroll = () => {
  //   setShowMenu(false);
  // };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    // window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <header className="sticky top-0 z-50">
      <nav className='hidden justify-between items-center md:flex bg-white bg-opacity-40  shadow-lg shadow-black/10 backdrop-blur-[3.9px] border border-white border-opacity-30'>
        <img src='lion.png' alt='...' className='w-16 mx-5 ' />

        <ul className='flex justify-center  items-center gap-5 mx-5 font-semibold'>

          <li className='hover:font-bold hover:text-gray-700'><Link href="/">Home</Link></li>
          <li className='hover:font-bold hover:text-gray-700'><Link href="/about">About</Link></li>
          <li className='hover:font-bold hover:text-gray-700'><Link href="/services">Services</Link></li>
          <li className='hover:font-bold hover:text-gray-700'><Link href="/contact">Contact</Link></li>
          <li className='hover:font-bold hover:text-gray-700'><Link href="/blog">Blog</Link></li>
        </ul>
        <div>
          <button className=' text-white border-black px-3 py-2  hover:border-black border-2 hover:text-black rounded-2xl mx-5  bg-gradient-to-r from-[#F308FE] to-[#56e2f5] hover:bg-gradient-to-r hover:from-[#69eeff] hover:to-[#f424ff]'>Sign In</button>
        </div>
      </nav>



      <nav className='block md:hidden' ref={menuRef}>
        <div className='flex justify-between items-center px-3  md:hidden  bg-white bg-opacity-30  shadow-lg shadow-black/10 backdrop-blur-[3.9px] border border-white border-opacity-30'>
          <img src='lion.png' alt='no image ' className='w-16 mx-2 ' />


          <div className='flex justify-between '>
            <button className='bg-purple-600 text-white px-3 py-2 hover:bg-transparent hover:border-black border-2 hover:text-black rounded-2xl mx-2'>Sign In</button>
            <button className='text-black  bg-transparent  px-3 items-center' onClick={toggleMenu} >
              {
                showMenu ? <X /> : <AlignJustify />

              }</button>
          </div>
        </div>
       
          <ul className={`${showMenu ? "flex" : "hidden"} py-3 text-black  justify-center flex-col items-center  gap-4 font-semibold w-full bg-white bg-opacity-30  shadow-lg shadow-black/10 backdrop-blur-[3.9px] border border-white border-opacity-30`}>

            <li className='hover:font-bold hover:text-gray-700 '><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li className='hover:font-bold hover:text-gray-700'><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li className='hover:font-bold hover:text-gray-700'><Link href="/services" onClick={toggleMenu}>Services</Link></li>
            <li className='hover:font-bold hover:text-gray-700'><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
            <li className='hover:font-bold hover:text-gray-700'><Link href="/Blog" onClick={toggleMenu}>Blog</Link></li>
          </ul>
       

      </nav>
     
    </header>
    </>
  );
};

export default Header;            