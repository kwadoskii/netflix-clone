export default function ReadyToWatch() {
  return (
    <div className="flex flex-col gap-3 text-center max-w-3xl mx-auto w-full">
      <p className="text-lg text-white px-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="flex justify-center flex-col gap-y-2 md:flex-row items-center mt-4 w-full mx-auto">
        <div className="w-full md:flex-1">
          <input
            className="px-2 py-5 w-full outline-none h-auto flex-grow"
            placeholder="Email address"
            type="email"
          />
        </div>

        <div className="">
          <button className="bg-[#e50914] p-3.5 md:px-5 md:py-4 text-white text-lg md:text-3xl flex gap-1 md:gap-3 items-center hover:bg-[#f62229] transition-all ease-linear duration-200">
            <p>Get Started</p>
            <svg
              className="md:w-6 md:h-6 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
