import React from "react";
import ListItem from "./ListItem";
import { motion } from "framer-motion";
function Skills() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      viewport={{ once: true, amount: 0.4 }}
      id="skills"
      className="py-[100px] w-screen max-w-full desktop:container"
    >
      <div className="flex flex-row mobile:flex-col justify-center max-w-[900px] mx-auto mobile:px-3">
        <div className="w-[150px] mx-4 mobile:mb-14 mobile:w-full mobile:mx-0">
          <h1 className="font-poppins uppercase text-3xl font-bold mobile:text-center">
            Skills
          </h1>
          <p className="font-proxima text-[18px]"></p>
        </div>

        <div
          className="text-[18px] grid grid-cols-4 mini-laptop:grid-cols-2
           tablet:grid-cols-2 mobile:grid-cols-2 mobile:pl-8"
        >
          <div className="mr-14 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Languages
            </h1>
            <ListItem name="Java" i={1} />
            <ListItem name="C" i={1} />
            <ListItem name="PHP" i={1} />
            <ListItem name="Javascript" i={2} />
            <ListItem name="Python" i={4} />
            <ListItem name="HTML" i={5} />
            <ListItem name="CSS" i={6} />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Frameworks
            </h1>
            <ListItem name="Flutter" i={1} />
            <ListItem name="Nextjs" i={1} />
            <ListItem name="Nodejs" i={1} />
            <ListItem name="Expressjs" i={1} />
            <ListItem name="Tailwind CSS" i={1} />
            <ListItem name="Bootstrap" i={1} />
            <ListItem name="ReactJs" i={1} />
            <ListItem name="React Native" i={1} />
            <ListItem name="CodeIgniter4" i={1} />

          </div>
          <div className="mr-14 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Databases
            </h1>
            <ListItem name="PostgreSql" i={1} />
            <ListItem name="firebase" i={1} />
            <ListItem name="supabase" i={1} />
            <ListItem name="mongodb" i={1} />
            <ListItem name="MySQL" i={1} />
          </div>
          <div className="mr-14 tablet:mr-0 mobile:mr-0 mb-5">
            <h1 className="font-apple font-bold tracking-wide mb-3 uppercase text-[16px]">
              Tools
            </h1>
            <ListItem name="docker" i={1} />
            <ListItem name="git & github" i={1} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;