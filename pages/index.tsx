import Head from 'next/head';
import React from 'react';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Motivation from '../components/home/Motivation';
import Blog from '../components/home/Blog';
import Footer from '../components/layout/Footer';
import Modal from '../components/home/Modal';

const Home: NextPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <>
      <Head>
        <title>Veenus</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Navbar handleOpen={handleOpen}/>
      <div className="relative overflow-hidden">
        <div className="hidden lg:block w-full h-full absolute">
          <div className="bg-image-mockups absolute z-20 w-full h-full bg-no-repeat bg-auto bg-right-top -right-72 xl:-right-28"></div>
        </div>
        <Hero handleOpen={handleOpen}/>
        <Motivation />
      </div>
      <Blog />
      <Footer handleOpen={handleOpen}/>
      <Modal open={open} handleClose={handleClose} />
    </>
  );
};

export default Home;
