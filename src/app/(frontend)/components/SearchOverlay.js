import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function SearchOverlay({ showSearch, setShowSearch }) {
  if (!showSearch) return null;

  return (
    <div className="fixed inset-0 w-full h-full bg-[rgba(0,0,0,0.9)] z-[10000] flex justify-center items-center">
      <IoClose
        className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
        onClick={() => setShowSearch(false)}
      />

      <div className="bg-[#d4af37] p-3 flex items-center justify-center rounded-md shadow-md">
        <FiSearch className="text-white text-2xl" />
      </div>

      <div className="w-2"></div>

      <div className="flex items-center w-2/3 max-w-md bg-white rounded-md shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 outline-none border-none bg-transparent text-black"
        />
      </div>
    </div>
  );
}
