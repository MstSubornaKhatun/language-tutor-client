import React from 'react';
import { motion } from "framer-motion"; 

const Banner = () => {
    return (
        <div className="hero min-h-96 rounded pt-10 pb-10 bg-[#fefae0] dark:bg-gray-900 dark:text-white">
            <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between gap-10">
                
                {/* Desktop View */}
                <div className="hidden md:flex gap-6 flex-1 justify-center">
                     <div className='flex-1'>
                    <motion.img
                        src="https://i.ibb.co/NbVJxZv/Screenshot-2025-06-16-104741.png"
                        animate={{y: [100, 150, 100]}}
                        transition={{duration: 5, repeat: Infinity}}
                        className="lg:max-w-sm w-[500px] border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                    <motion.img
                        src="https://i.ibb.co/1JGsct2Z/Screenshot-2025-06-16-104154.png"
                        animate={{x: [100, 150, 100]}}
                        transition={{duration: 10, delay:5, repeat: Infinity}}
                        className="lg:max-w-sm w-[500px] border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                    />
                </div>

                </div>

                {/* Mobile View */}
                <div className="md:hidden flex flex-col items-center gap-4 flex-1">
                    <motion.img
                        src="https://i.ibb.co/NbVJxZv/Screenshot-2025-06-16-104741.png"
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="w-11/12 border-blue-500 border-s-8 border-b-8 rounded-t-[40px] rounded-br-[40px] shadow-2xl"
                        alt="Banner Image 1"
                    />
                   
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold"> 
                        Connecting Learners <br /> with Expert{" "}
                        <motion.span
                            animate={{
                                color: ['#ff5733', '#33ff33', '#8a33ff'],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            Tutors
                        </motion.span>{" "}
                       Worldwide
                    </h1>
                    <p className="py-2 text-gray-600">
                       Find the perfect tutor for any subject or language, and <br /> start learning today!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;