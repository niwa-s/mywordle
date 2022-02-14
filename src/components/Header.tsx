import "../App.css";
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  CogIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="bg-black flex flex-row justify-between h-14 px-4 items-center border-b border-b-gray-500">
      <div className="flex">
        <MenuIcon className="h-7 w-7 text-white" />
        <QuestionMarkCircleIcon className="h-7 w-7 text-white" />
      </div>
      <div className="text-white mx-auto font-serif font-black text-3xl">
        Wordle
      </div>
      <div className="flex">
        <ChartBarIcon className="h-7 w-7 text-white" />
        <CogIcon className="h-7 w-7 text-white" />
      </div>
    </header>
  );
};

export default Header;
