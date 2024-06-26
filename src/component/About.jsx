import { motion } from "framer-motion";
const textAnimate = {
  offscreen: { x: 50, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};
const textUpAnimate = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 1 },
  },
};

const About = () => {
  return (
    <div
      id="about"
      className="bg-transparent py-[100px] w-screen max-w-full desktop:container"
    >
      <div className=" flex flex-row max-w-[900px] mx-auto tablet:block mobile:block mobile:px-3">
        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className="flex-grow my-auto text-right uppercase px-6 tablet:text-center mobile:text-center"
        >
          <h1 className="font-poppins text-3xl font-bold ">About</h1>
          <p className="text-gray-500">Me, Myself and I</p>
          <div className="h-52 tablet:h-8 mobile:h-8"></div>
        </motion.div>

        <motion.div
          variants={textAnimate}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { type: "spring", bounce: 0.2, duration: 1 },
          }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ staggerChildren: 1 }}
          className=" font-proxima text-[17px] w-[65%] px-6 py-2 tablet:w-full mobile:w-full mobile:px-2 text-gray-500"
        >
          <motion.p variants={textUpAnimate}>
            Hello! My name is <b>Nalendro N.U.A.R.F</b>, I have been Interested in developing projects in the field of information technology, especially in software development such as website and mobile applications which includes back-end and front-end development. Has some experience in designing website and mobile application interface interactions. Can work well in a team or individually and responsibly to complete the task.
          </motion.p>
          <br />
          <motion.p variants={textUpAnimate}>
            It was a lot of hard work to build full-stack applications and I was
            able to learn and grow as a developer through the building process.
            I am excited to continue improving and expanding the app in the
            future.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;