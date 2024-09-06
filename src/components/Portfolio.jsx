// eslint-disable-next-line no-unused-vars
import React from 'react';
import project1 from "../assets/pmb.jpeg";
import project2 from "../assets/Screenshot (15).png";
import project4 from "../assets/Screenshot (17).png";
import project5 from "../assets/Screenshot (16).png";
import project6 from "../assets/Screenshot (80).png";
import project7 from "../assets/ppid.png";
import project8 from "../assets/Screenshot (95).png";
import project9 from "../assets/statuspermohonan.png";
import { AiFillGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
  {
    img: project1,
    title: "Aplikasi Pencarian Rumah Sakit Di Yogyakarta",
    description: "Menggunakan Java.",
    links: {
      site: "#",
      github: "https://github.com/tegar-arsya/PMOB",
    },
  },
  {
    img: project2,
    title: "Wedding Organizer Setia WO",
    description: "A fullstack application built with Bootstrap, PHP, and MySQL.",
    links: {
      site: "#",
      github: "https://github.com/tegar-arsya/RPL-WEDDING-ORGANIZER",
    },
  },
  {
    img: project4,
    title: "Sistem Informasi Geografis Untuk Wisata Di Kuningan",
    description: "Javascript",
    links: {
      site: "https://tegar-arsya.github.io/wisata-sig-kuningan/",
      github: "https://github.com/tegar-arsya/wisata-sig-kuningan",
    },
  },
  {
    img: project5,
    title: "Website Toko Kue Gendis",
    description: "menggunakan boostrap dan php. ",
    links: {
      site: "#",
      github: "https://github.com/tegar-arsya/Gendis-web",
    },
  },
  {
    img: project6,
    title: "Website portal berita provinsi jawa tengah",
    description: "Menggunakan Bootstrap dan PHP. ",
    links: {
      site: "#",
      github: "https://github.com/tegar-arsya/portal-berita-jateng",
    },
  },
  {
    img: project7,
    title: "Website Pelayanan Informasi Publik PPID Provinsi Jawa Tengah",
    description: "Menggunakan Bootstrap, PHP, JavaScript, dan SMTP. ",
    links: {
      site: "https://tegararsyadani.my.id/ppid/",
      github: "#",
    },
  },
  {
    img: project8,
    title: "Website Landing page Kantor Hukum RIM PARTNER",
    description: "Menggunakan React js. ",
    links: {
      site: "https://rim-partner.vercel.app/",
      github: "#",
    },
  },
  {
    img: project9,
    title: "WEBSITE CEK STATUS PERMOHONAN INFORMASI PUBLIK PPID PROVINSI JAWA TENGAH",
    description: "Dibuat Menggunakan Framework Next JS dan Tailwind CSS. ",
    links: {
      site: "https://www.cekstatus.tegararsyadani.my.id/",
      github: "#",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20 bg" id="portfolio">
      <h2 className="text-center text-gray-200 md:text-7xl text-5xl tracking-tight mb-8">Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Reveal key={index}>
            <div className="p-4 shadow-lg rounded-lg transition transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-semibold text-gray-200 mt-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.links.site} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">
                  View Site
                </a>
                <a href={project.links.github} className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
