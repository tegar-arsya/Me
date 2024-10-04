// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
            stiffness: 20,
            damping: 15
            }
        },
        closed: {
            x: '-100%',
            transition: {
            stiffness: 20,
            damping: 15
            }
        }
    }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  flex justify-between text-gray-200
        text-xl items-center px-12 h-20'>

            <a href="Hero" className='font-bold text-4xl'>Tegar Arsyadani</a>

            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li><Link to="portfolio" smooth={true} offset={50} duration={500} className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>Portofolio</Link></li>
                <li><Link to="about" smooth={true} offset={50} duration={500} className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>About</Link></li>
                <li><Link to="contact" smooth={true} offset={50} duration={500} className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>Contact</Link></li>
            </ul>

            <div onClick={toggleNav} className='md:hidden z-50 text-gray-200'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            <motion.div
    initial={false}
    animate={nav ? 'open' : 'closed'}
    variants={menuVariants}
    className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
>
    <ul className='font-semibold text-3xl space-y-8 mt-24 text-center'>
        <li>
            <Link to="portfolio" onClick={closeNav} smooth={true} offset={50} duration={500} className='text-purple-600 hover:text-gray-300 transition-colors duration-300'>Portfolio</Link>
        </li>
        <li>
            <Link to="about" onClick={closeNav} smooth={true} offset={50} duration={500} className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>About</Link>
        </li>
        <li>
            <Link to="contact" onClick={closeNav} smooth={true} offset={50} duration={500} className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>Contact</Link>
        </li>
        <li className='flex items-center justify-center'>
            <a href="https://github.com/tegar-arsya" className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>
                <FaGithub size={30} />
            </a>
            <a href="https://www.instagram.com/tegar_arsya/" className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>
                <FaInstagram size={30} />
            </a>
            <a href="https://wa.me/6281353677822" className='text-gray-300 hover:text-purple-600 transition-colors duration-300'>
                <FaWhatsapp size={30} />
            </a>
        </li>
    </ul>
</motion.div>




        </div>
    </div>
  )
}

export default Navbar
