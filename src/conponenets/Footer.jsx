import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white justify-between items-center py-5 px-20 flex lg:flex-row flex-col">
        <div className=''>
            <h1 className="text-2xl">OMICAB</h1>
            <p className="text-sm">This site is basically about sport, <br />it talks about the cricketball and 
                <br />the team player that are involved.
            </p>
        </div>


        <div className="min-h-full h-full flex gap-4 justify-end items-baseline">
            <p className="text-sm">The terms and condition</p>
            <p className="text-sm">Privacy and policy</p>
        </div>
    </footer>
  );
}

export default Footer