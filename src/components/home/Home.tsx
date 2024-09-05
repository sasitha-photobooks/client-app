import HeroImage from "../../assets/hero-image.jpg";
import "./Home.css";

export function Home() {
  return (
    <>
      <div className="hidden md:flex h-4/5 items-center">
        <div className="flex flex-row lg:px-[8%] justify-around w-full items-center">
          <div className="flex flex-col md:gap-3 xl:gap-6 w-[45%]">
            <div className="text-3xl xl:text-4xl text-primary font-title">
              CREATE MEMORIES
            </div>
            <div className="md:max-h-[30vh] lg:max-h-[35vh] xl:max-h-[45vh] md:text-lg xl:text-xl font-light text-secondary font-display md:leading-[250%] xl:leading-[300%] hero-content text-ellipsis overflow-hidden">
              Customized photobooks and calendars are fantastic ways to preserve
              and celebrate memories. They allow you to curate your favorite
              moments, organizing them into a meaningful narrative that can be
              revisited anytime. Each page becomes a special reminder of
              significant times, making them deeply personal gifts.
            </div>
            <div className="font-display text-lg text-primary ms-[10%]">
              <button className="bg-accent rounded-sm font-medium py-[2.5%] md:px-[15%] xl:px-[10%]">
                PRINT MEMORIES
              </button>
            </div>
          </div>
          <div className="flex justify-center w-[45%]">
            <img className="rounded-lg hero-image" src={HeroImage} alt="Hero" />
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col items-center overscroll-auto">
        <img
          className="my-8 rounded-lg w-[70vw] sm:w-[60vw] h-auto"
          src={HeroImage}
          alt="Hero"
        />
        <div className="mt-2 text-3xl text-primary font-title">
          CREATE MEMORIES
        </div>
        <div className="mt-5 px-2 text-center text-lg font-light text-secondary font-display leading-[230%]">
          Customized photobooks and calendars are fantastic ways to preserve and
          celebrate memories. They allow you to curate your favorite moments,
          organizing them into a meaningful narrative that can be revisited
          anytime. Each page becomes a special reminder of significant times,
          making them deeply personal gifts.
        </div>
        <button className="mt-5 font-display text-lg text-primary bg-accent rounded-sm font-medium py-3 px-10 w-5/6">
          PRINT MEMORIES
        </button>
      </div>
    </>
  );
}
