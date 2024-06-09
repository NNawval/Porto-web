import Icon from "./Icon";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
function Contact() {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      viewport={{ once: true, amount: 0.4 }}
      id="contact"
    >
      <div className="bg-transparent pt-[130px] pb-[60px] tablet:px-8 mini-laptop:px-8 laptop:px-8  mobile:px-4 border-slate-200 m-auto max-w-[1000px] desktop:container">
        <div className="px-2">
          <h1 className="font-poppins font-bold mb-1.5 text-3xl uppercase text-center">
            Contact me
          </h1>
          <p className="font-proxima text-slate-500 text-[18px] text-center mt-2">
            Leave a message on my any of my social media, I&apos;ll reach out to
            you as soon as Possible.
            <br /> Thank you! for visiting.
          </p>
        </div>
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ staggerChildren: 0.5 }}
          className="px-14 tablet:px-10 py-12 flex flex-row mobile:px-8 justify-center items-center"
        >
          <Icon
            i={3}
            url="https://www.linkedin.com/in/ansh-rathod-478a81210/"
            classes={faLinkedin}
            name="Linkedin"
          />

          <Icon
            i={6}
            url="mailto:anshrathod29@gmail.com"
            classes={faEnvelope}
            name="Email"
          />
          <Icon
            i={7}
            url="https://www.instagram.com/anshrathodfr"
            name="Instagram"
            classes={faInstagram}
          />
        </motion.div>
      </div>

      <div className="content-center py-6 border-t-[0.6px] mobile:px-6 tablet:px-8 border-slate-200 text-center text-[14px] text-slate-500">
        <p>© June 2024 Nalendro. All rights reserved.</p>
      </div>
    </motion.div>
  );
}

export default Contact;