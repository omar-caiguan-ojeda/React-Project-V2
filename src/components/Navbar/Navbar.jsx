import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'

const navbarLinks = [
    {
        id: 1,
        title: "Inicio",
        url: "#"
    },
    {
        id: 2,
        title: "Sobre nosotros",
        url: "#"
    },
    {
        id: 3,
        title: "Servicios",
        url: "#"
    },
    {   
        id: 4,
        title: "Contacto",
        url: "#"
    },
]

const navbarRedes = [
    {
        id: 1,
        title: "Facebook",
        icon: "bi bi-facebook",
        url: "https://www.facebook.com/",
    },
    {
        id: 2,
        title: "Instagram",
        icon: "bi bi-instagram",
        url: "https://www.instagram.com/",
    },
    {
        id: 3,
        title: "TikTok",
        icon: "bi bi-tiktok",
        url: "https://www.tiktok.com/",
    },
    {
        id: 4,
        title: "Youtube",
        icon: "bi bi-youtube",
        url: "https://www.youtube.com/",
    },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className='fixed top-0 left-0 bg-purple-900 w-full bg-opacity-30 backdrop-blur-md z-50'>

        <div className='flex justify-between items-center  sm:px-12 md:py-6 px-4 py-3'>

            {/* Logo */}
            <div>
                <img src={Logo} alt='Logo' className='w-[100px]'/>
            </div>


            {/* Botón Hamburguesa */}
            <button onClick={toggleMenu} className='md:hidden text-white' >
                <svg 
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                >
                    {isOpen ? (<path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                    /> ) : 
                    (<path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                        />) 
                    }
                    
                    
                </svg>
            </button>

                
            {/* Menú Links */}
            <div className='hidden md:block'>
                <ul className='flex sm:space-x-12 space-x-4'>
                    {navbarLinks.map((link) => (
                        <li key={link.id}>
                            <a 
                            href={link.url} 
                            className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform- inline-block duration-300'>
                            {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Redes Links */}
            <div className='hidden md:block'>
                <ul className='flex space-x-4'>
                    {navbarRedes.map((red) => (
                        <li key={red.id}>
                            <a 
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-block transition-transform duration-300 transform hover:scale-125'
                            href={red.url}>
                                <i className={`${red.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                
            </div>

        </div>

        {/* Menú Movil */}
        <div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <ul className='flex flex-col px-4 py-2'>
                {navbarLinks.map((link) => (
                    <li key={link.id} className='py-2 text-center' >
                        <a 
                        href={link.url} onClick={() => setIsOpen(false)}
                        className='text-white hover:text-sky-200'>
                        {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className='flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center'>
                {navbarRedes.map((red) => (
                    <li key={red.id}>
                        <a 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block'
                        href={red.url}>
                            <i className={`${red.icon} text-lg text-white hover:text-sky-200`}>    
                            </i>
                        </a>
                    </li>
                ))}
            </ul>


        </div>

    </nav>
  )
}

export default Navbar
