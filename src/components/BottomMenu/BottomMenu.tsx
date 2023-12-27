"use client";

import {
  CandlestickChart,
  HomeIcon,
  ClipboardListIcon,
  Replace,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const buttons = [
  {
    Icon: HomeIcon,
    title: "Главная",
    href: "/home",
  },
  {
    Icon: CandlestickChart,
    title: "Рынки",
    href: "/markets",
  },
  {
    Icon: ClipboardListIcon,
    title: "Деривативы",
    href: "/",
  },
  {
    Icon: Replace,
    title: "Торговать",
    href: "/trade",
  },
  {
    Icon: Wallet,
    title: "Активы",
    href: "/wallet",
  },
];

const BottomMenu = () => {
  const pathname = usePathname().split("/");

  return (
    <div className="flex w-full justify-center items-center py-2 px-4 fixed bottom-0 left-0 border-t bg-white z-[100000] impor border-black/10">
      <ul className="w-full flex justify-between items-center">
        {buttons.map((button, index) => (
          <li key={index}>
            <Link
              href={button.href}
              className="flex flex-col justify-center items-center gap-2"
            >
              <button.Icon
                size={26}
                color={`${pathname[1] === button.href && "#ff8800"}`}
              />
              <span
                className={`text-xs ${
                  pathname[1] === button.href
                    ? "text-orange-400"
                    : "text-zinc-500"
                }`}
              >
                {button.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomMenu;
