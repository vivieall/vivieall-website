import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
          <br />
          <a className="text-yellow-400 z-50 relative" href="https://www.bitly.com/vivieall"
             target="_blank" rel="noopener noreferrer"> {config.hero.cv}</a>
        </div>
      </div>
     
      <ComputersCanvas />
    
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
      <a href="#about">
        <div className="border-secondary flex h-[34px] w-[64px] items-center justify-center rounded-full border-2 p-2">
          <motion.div
            animate={{
              rotateY: [0, 180], 
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="flex items-center justify-center"
          >
            <div className="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-white"></div>
          </motion.div>
        </div>
      </a>
    </div>

    </section>
  );
};

export default Hero;
