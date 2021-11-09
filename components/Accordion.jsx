export default function Accordion({ title, details, visible, setVisible }) {
  return (
    <div className="bg-[#303030] text-white my-2 w-full cursor-pointer" onClick={setVisible}>
      <div className="flex justify-between items-center border-b p-5 px-7 border-black transition-all ease-linear duration-100 select-none">
        <h2 className="font-normal text-2xl">{title}</h2>
        {!visible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
      {visible && (
        <p className="p-7 font-normal text-2xl">
          <p dangerouslySetInnerHTML={{ __html: details }}></p>
        </p>
      )}
    </div>
  );
}
