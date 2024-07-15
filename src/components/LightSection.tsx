
type SecData = {
  title: string;
  desc: string;
  imgUrl: string;
  url?: string;
  video?: boolean;
};

export default function LightSection({ secData }: { secData: SecData }) {
  return (
    <section className="bg-white">
      <div className="max-ctn pad-y pad-x flex flex-wrap-reverse justify-between items-center gap-16">
        <div className="w-full max-w-lg">
          <h3 className="text-6xl font-semibold mb-6 max-md:!text-2xl ">
            {secData.title}
          </h3>
          <p className="desc mb-4 md:mb-10 lg:mb-6 font-normal max-md:!text-lg">
            {secData.desc}
          </p>

          <a href="#" className="primaryBtn">
            Explore Products<span className="ml-3">&rarr;</span>
          </a>
        </div>

        <div className="w-full max-w-md">
          {!secData.video && (
            <img src={secData.imgUrl} alt="copy trade" className="w-full" />
          )}
          {secData.video && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/7652013/7652013-uhd_3840_2160_30fps.mp4"
                type="video/mp4"
              />
              video
            </video>
          )}
        </div>
      </div>
    </section>
  );
}
