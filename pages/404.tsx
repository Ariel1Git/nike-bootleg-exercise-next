import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




const Page404 = () => {
  return (
    <div className="page">

      
     
      <h1 className="title">ERROR 404 pagina non esistente</h1>
       <Link className="link" style={{ textDecoration: 'none' }} href="/">
            <button className="button"  >TORNA ALLA HOME</button>      
        </Link>



    </div>
  )
}

export default Page404