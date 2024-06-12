import { motion } from "framer-motion";
import Navbar from "./Navbar";
import gambar from "../assets/gambar.png"
const textAnimate = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1 },
    },
};

const Intro = () => (
    <div className="bg-transparent ">
        <div id="home" className="box-border  bg-no-repeat ">
            <div className=" backdrop-blur-3xl h-1/2 ">
                <div className="desktop:max-w-[1800px] m-auto flex">
                    <div className="w-[45%] h-screen max-h-[808px] xl:px-36 lg:px-24 
      md:px-18 sm:px-12 tablet:hidden mobile:hidden ">
                        <div className="w-full h-full content-center">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
                                viewport={{ once: false, amount: 0.6 }}
                                className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8"
                            >
                                <img src={gambar} alt="Logo" />
                            </motion.div>
                        </div>
                    </div>
                    <div
                        className="w-[55%] flex flex-col justify-center h-screen max-h-[808px]
          tablet:w-full tablet:max-w-[600px] tablet:m-auto
          mobile:w-full 
        "
                    >
                        <div className="">
                        </div>
                        <motion.div
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ staggerChildren: 0.5 }}
                            className="px-16     tablet:px-10 mobile:px-8 "
                        >
                            <motion.p
                                variants={textAnimate}
                                className="font-proxima text-xl leading-10 mobile:text-[22px] mobile:py-2 "
                            >
                                HELLO, I AM
                            </motion.p>
                            <h1 className=" font-bold font-poppins text-5xl  leading-snug mini-laptop:text-4xl mini-laptop:leading-normal tablet:text-4xl tablet:leading-sung mobile:leading-[1.1]">
                                Nalendro
                            </h1>
                            <p className="font-proxima text-[18px] max-w-[600px] text-slate-500 mini-laptop:text-[20px] tablet:text-[18px] mobile:text-[18px] mobile:py-2 ">
                                A full-stack developer, Building Seamless mobile & web applications.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
                            viewport={{ once: false, amount: 0.6 }}
                            className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8"
                        >
                            <a href="https://drive.google.com/file/d/1O_S1tNr5cZHaP8d-KFfAn3zDRKOvhxOy/view?usp=sharing" target="_blank" className="flex items-center font-apple rounded-lg border-2 border-solid bg-black p-2.5 px-6 text-lg
            capitalize text-white hover:border-black hover:bg-transparent hover:text-black font-medium
            dark:bg-white dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-6 md:text-base
             "> Resume <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-auto ml-1 !w-6 md:!w-4"><path fill="none" d="M0 0h24v24H0z" ></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"></path></svg></a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

export default Intro;