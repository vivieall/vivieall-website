import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-5 sm:gap-8">
        {technologies.map((technology) => (
          <div
            className="bg-tertiary flex h-24 w-24 items-center justify-center rounded-lg border border-white/10 p-5 shadow-card transition hover:-translate-y-1 hover:border-[#915EFF]"
            key={technology.name}
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
