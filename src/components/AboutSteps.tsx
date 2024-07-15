import secBg from '../assets/road.png';

type AboutStep = {
  title: string;
  desc: string;
  moreDesc?: string[];
};

export default function AboutSteps({
  aboutSteps,
}: {
  aboutSteps: AboutStep[];
}) {
  return (
    <section
      className="flex flex-wrap justify-center gap-20 max-ctn py-14 px-5 bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${secBg})`}}
    >
      {aboutSteps.map((aboutStep, i) => (
        <div className="w-full max-w-sm p-8 flex flex-col gap-5 shadow-md rounded-3xl bg-white/60 backdrop-blur-lg">
          <div className="w-9 h-9 rounded-full p-5 bg-gray-900 text-gray-300 flex items-center justify-center font-semibold">
            {i + 1}
          </div>
          <h3 className="text-xl font-bold">{aboutStep.title}</h3>
          <p className="font-medium text-base text-gray-700">{aboutStep.desc}</p>
          {aboutStep.moreDesc && aboutStep.moreDesc.map(desc => <p className="font-normal text-sm text-gray-600">{desc}</p>)}
        </div>
      ))}
    </section>
  );
}
