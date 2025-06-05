import React from 'react';
import { motion } from "motion/react";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 w-11/12 mx-auto rounded mt-10 mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src="https://i.ibb.co/5gZz4JSM/Screenshot-2025-05-24-194331.png"
                        animate={{y: [100, 150, 100]}}
                        transition={{duration: 5, repeat: Infinity}}
                        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                    <motion.img
                        src="https://i.ibb.co/5gZz4JSM/Screenshot-2025-05-24-194331.png"
                        animate={{x: [100, 150, 100]}}
                        transition={{duration: 10, delay:5, repeat: Infinity}}
                        className="max-w-sm border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                </div>
                <div className='flex-1'>
                    <h1
                        className="text-5xl font-bold">Remote <motion.span
                            animate={
                                {
                                    color: ['#ff5733', '#33ff33', '#8a33ff'],
                                    transition: { duration: 2, repeat: Infinity }
                                }}
                        >Jobs</motion.span> For you!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;