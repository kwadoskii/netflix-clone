import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/client";
import Divider from "../components/Divider";
import Image from "next/image";
import Accordion from "../components/Accordion";
import { useState } from "react";
import ReadyToWatch from "../components/ReadyToWatch";
import Footer from "../components/Footer";

export default function Home() {
  const [session] = useSession();
  const [activeAccordion, setActiveAccordion] = useState(null);

  const accordionData = [
    {
      title: "What is Netflix?",
      details: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
      <br />
      <br />
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      title: "How much does Netflix cost?",
      details:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.",
    },
    {
      title: "Where can I watch?",
      details: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      <br />
      <br />
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      title: "How do I cancel?",
      details: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      title: "What can I watch on Netflix?",
      details: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      title: "Is Netflix good for kids?",
      details: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      <br />
      <br />
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  const handleToggle = (i) => {
    activeAccordion === i ? setActiveAccordion(null) : setActiveAccordion(i);
  };

  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div
          style={{
            backgroundImage: `linear-gradient(358deg, rgb(0 0 0 / 90%), rgba(0,0,0, 0.5)), url(images/hero.jpg)`,
          }}
        >
          <header className="flex justify-between px-12 py-8 md:px-14 md:py-7 ">
            <div>
              <svg
                viewBox="0.238 0.034 919.406 248.488"
                xmlns="http://www.w3.org/2000/svg"
                className="w-28 md:w-40"
              >
                <path
                  d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z"
                  fill="#e50914"
                />
              </svg>
            </div>
            <div>
              {!session ? (
                <button
                  onClick={() => signIn("google")}
                  className="flex items-center bg-[#e50914] text-white px-4 py-1.5 rounded outline-none hover:bg-[#f62229] transition-all ease-linear duration-200"
                >
                  Sign in
                </button>
              ) : (
                <button
                  onClick={() => signOut()}
                  className="flex items-center bg-[#e50914] text-white px-4 py-1.5 rounded outline-none hover:bg-[#f62229] transition-all ease-linear duration-200"
                >
                  Sign out
                </button>
              )}
            </div>
          </header>

          <div className="flex flex-col items-center gap-3 px-3 py-32 md:py-40">
            <h1 className="max-w-2xl text-5xl font-bold tracking-wide text-center text-white md:text-6xl">
              Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-2xl text-white">Watch anywhere. Cancel anytime.</h2>

            <ReadyToWatch />
          </div>
        </div>

        <div className="bg-black">
          <Divider />

          <div className="grid items-center max-w-5xl gap-2 justify-between grid-cols-2 py-10 px-6 md:py-20 mx-auto text-white ">
            <div className="col-span-full md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Enjoy on your TV.</h2>
              <p className="text-2xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and
                more.
              </p>
            </div>

            <div className="relative w-96 h-64 mx-auto">
              <Image
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                layout="fill"
              />
            </div>
          </div>

          <Divider />

          <div className="grid items-center max-w-5xl gap-2 justify-between grid-cols-2 py-10 px-6 md:py-20 mx-auto text-white ">
            <div className="relative w-96 h-64 mx-auto">
              <Image
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                layout="fill"
              />
            </div>
            <div className="col-span-full md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Download your shows to watch offline.
              </h2>
              <p className="text-2xl">
                Save your favorites easily and always have something to watch.
              </p>
            </div>
          </div>

          <Divider />

          <div className="grid items-center max-w-5xl gap-2 justify-between grid-cols-2 py-10 px-6 md:py-16 mx-auto text-white ">
            <div className="col-span-full md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Watch everywhere.</h2>
              <p className="text-2xl">
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
            </div>
          </div>

          <Divider />

          <div className="grid items-center max-w-5xl gap-2 justify-between grid-cols-2 py-10 px-6 md:py-10 mx-auto text-white ">
            <div className="relative w-96 h-96 mx-auto">
              <Image src="/images/kids.png" layout="fill" objectFit="contain" />
            </div>
            <div className="col-span-full md:col-span-1">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Create profiles for kids.
              </h2>
              <p className="text-2xl">
                Send kids on adventures with their favorite characters in a space made just for
                them—free with your membership.
              </p>
            </div>
          </div>

          <Divider />

          <div className="text-white py-16 pb-6 max-w-5xl mx-auto">
            <h3 className="text-4xl px-1 md:text-5xl font-extrabold text-center">
              Frequently Asked Questions
            </h3>

            <div className="max-w-3xl mx-auto mt-14 px-3">
              {accordionData.map((a, i) => (
                <Accordion
                  key={i}
                  title={a.title}
                  details={a.details}
                  setVisible={() => handleToggle(i)}
                  visible={i === activeAccordion}
                />
              ))}
            </div>
          </div>

          <div className="mb-12 md:mb-20 px-3">
            <ReadyToWatch />
          </div>

          <Divider />
        </div>
      </main>

      <Footer />
    </>
  );
}
