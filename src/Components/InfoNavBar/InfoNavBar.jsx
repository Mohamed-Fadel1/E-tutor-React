import React, { useState } from 'react'

const InfoNavBar = () => {
    const [open, setOpen] = useState(true);
    
    return (
        <>
            {open && (
                <div className=" hidden lg:block bg-primary text-center p-1 font-bold text-sm tracking-wide relative">
                    <p className='text-black'>
                        Are you a university or school student for an online tutoring partnership?    <a className="text-secondary" href="#">Talk to us</a>
                    </p>
                    <p onClick={() => setOpen(false)} className=" text-black absolute top-1 right-10 cursor-pointer">X</p>
                </div>
            )}
        </>
    );
};

export default InfoNavBar;
