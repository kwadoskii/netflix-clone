export default function Footer() {
  return (
    <div className="py-4 bg-black pt-16 text-gray-500 px-3">
      <div className="max-w-4xl mx-auto">
        <p className="mb-5 cursor-pointer hover:underline">Questions? Contact us.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 text-base md:text-sm">
          <div className="col-span-1 gap-3 flex flex-col">
            <p className="cursor-pointer hover:underline">FAQ</p>
            <p className="cursor-pointer hover:underline">Investor Relations</p>
            <p className="cursor-pointer hover:underline">Privacy</p>
            <p className="cursor-pointer hover:underline">Speed Test</p>
          </div>
          <div className="col-span-1 gap-3 flex flex-col">
            <p className="cursor-pointer hover:underline">Help Center</p>
            <p className="cursor-pointer hover:underline">Jobs</p>
            <p className="cursor-pointer hover:underline">Cookie Preferences</p>
            <p className="cursor-pointer hover:underline">Legal Notices</p>
          </div>
          <div className="col-span-1 gap-3 flex flex-col">
            <p className="cursor-pointer hover:underline">Accounts</p>
            <p className="cursor-pointer hover:underline">Ways to Watch</p>
            <p className="cursor-pointer hover:underline">Cooperative Information</p>
            <p className="cursor-pointer hover:underline">Only on Netflix</p>
          </div>
          <div className="col-span-1 gap-3 flex flex-col">
            <p className="cursor-pointer hover:underline">Media Center</p>
            <p className="cursor-pointer hover:underline">Terms of Use</p>
            <p className="cursor-pointer hover:underline">Contact Us</p>
          </div>
        </div>

        <p className="text-sm my-8 mb-5">Netflix Nigeria</p>
      </div>
    </div>
  );
}
