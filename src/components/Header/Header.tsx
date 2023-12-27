import { Bell, HeadphonesIcon, ScanLine } from "lucide-react";
import { Input } from "../ui/input";
import AvatarIcon from "./AvatarIcon";

const Header = () => {
  return (
    <header className="w-full flex bg-white justify-center items-center p-2 fixed top-0 left-0">
      <div className="flex w-full justify-center items-center gap-4">
        <AvatarIcon />
        <Input className="w-[240px] rounded-full bg-gray-100 border-none" />
        <ScanLine size={26} />
        <HeadphonesIcon size={26} />
        <div className="relative">
          <Bell size={26} />
          <span className="absolute -top-2 -right-2 bg-rose-500 text-white w-5 h-5 rounded-full flex justify-center items-center text-sm">
            6
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
