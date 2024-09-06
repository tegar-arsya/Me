// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaGithubSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 w-full p-6 text-white text-center" id="contact">
      <div className="mx-auto max-w-7xl">
        <h3 className="text-2xl font-semibold mb-4">Tegar Arsyadani</h3>
        <div className="flex flex-row justify-center space-x-4">
          <a href="https://github.com/tegar-arsya" className="text-white hover:text-gray-400">
            <FaGithubSquare size={30} />
          </a>
          <a href="https://www.instagram.com/tegar_arsya/" className="text-white hover:text-gray-400">
            <FaInstagram size={30} />
          </a>
          <a href="https://wa.me/6281353677822" className="text-white hover:text-gray-400">
            <FaWhatsapp size={30} />
          </a>
        </div>
        <p className="mt-4">© 2024 Tegar Arsyadani</p>
      </div>
    </footer>
  )
}

export default Footer

