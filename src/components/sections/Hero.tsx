import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { ComputersCanvas } from "../canvas";
import { config } from "../../constants/config";

const Hero = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center bg-no-repeat relative mx-auto h-screen w-full overflow-hidden bg-primary">
      <div
        className={`absolute inset-0 top-[120px] z-10 mx-auto flex max-w-7xl flex-row items-start gap-5 ${styles.paddingX}`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="max-w-6xl">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p
            className={`${styles.heroSubText} text-white-100 mt-2 max-w-5xl`}
          >
            {config.hero.p.map((line) => (
              <span className="block" key={line}>
                {line}
              </span>
            ))}
          </p>
          <br />
          <a
            className="relative z-50 text-yellow-400 transition hover:text-white"
            href={config.hero.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {config.hero.cv}
          </a>

          <div className="relative z-20 mt-6 hidden max-w-2xl grid-cols-3 gap-3 sm:grid">
            {config.hero.metrics.map((metric) => (
              <div
                className="rounded border border-white/10 bg-black-100/60 px-4 py-3 backdrop-blur"
                key={metric.label}
              >
                <p className="text-[26px] font-black leading-none text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-[11px] leading-4 text-secondary">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-20 z-20 flex w-full items-center justify-center sm:bottom-8">
        <a href="#about" aria-label="Scroll to overview">
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
              <div className="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-white" />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
