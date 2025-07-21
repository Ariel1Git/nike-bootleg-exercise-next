import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {

  return (
  <>
    <head>
      <title>Nike</title>
      <meta name="description" content="home demo for studing next" />
    </head>

    <div className="page">

      
      <Image alt="Logo" src="/images/logo.jpg" width={500} height={500} />

      <h1 className="title">NIKE e-STORE</h1>
       <Link className="link" style={{ textDecoration: 'none' }} href="/catalogo">
            <button className="button"  >VEDI CATALOGO</button>      
        </Link>



    </div>
 </> )
}

export default Home