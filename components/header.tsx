"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosLink } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="relative flex items-center justify-between p-4 border-b bg-white dark:bg-black">
        <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={"/icon.png"}
            width={100}
            height={100}
            alt="logo"
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">QuiryLab</h1>
        </Link>
        <nav className="hidden sm:flex items-center gap-4 text-lg m-0 p-2">
          <Link href={"/"}>ホーム</Link>
          <Link href={"/about"}>QuiryLabについて</Link>
          <Link href={"/service"}>サービス</Link>
        </nav>
        <div className="sm:hidden flex justify-end items-center w-10 h-10">
          <button
            className="cursor-pointer"
            onClick={MenuOpen}
            aria-label="メニューを開く"
          >
            <HiOutlineMenuAlt3 className="w-8 h-8 p-1" />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex z-[9999]">
          <div
            className="w-3/10 h-full bg-gray-600 cursor-pointer opacity-50"
            onClick={MenuOpen}
          />
          <div className="w-7/10 h-full bg-black text-white flex flex-col animate-slide-in-right">
            <button
              onClick={MenuOpen}
              className="absolute top-4 right-4 cursor-pointer"
              aria-label="メニューを閉じる"
            >
              <IoClose className="w-8 h-8 p-1 text-white" />
            </button>
            <div className="flex flex-col items-center flex-1 p-14">
              <h2 className="text-2xl mb-4">メニュー</h2>
              <nav className="gap-4 flex flex-col items-center text-lg sm:text-lg m-0 p-0">
                <Link href={"/"}>ホーム</Link>
                <Link href={"/about"}>QuiryLabについて</Link>
                <Link href={"/service"}>サービス</Link>
              </nav>
              <div className="mt-auto flex flex-col items-center gap-2 justify-end w-full">
                <p className="text-gray-300 text-base">外部リンク</p>
                <nav className="flex flex-row sm:flex-col items-center text-sm m-0 p-0 text-gray-400 gap-2">
                  <a
                    href="https://x.com/quiryLab"
                    className="flex items-center gap-0.5"
                  >
                    X<IoIosLink />
                  </a>
                  <a
                    href="https://discord.gg/vJ6kf8SnYm"
                    className="flex items-center gap-0.5"
                  >
                    Discord
                    <IoIosLink />
                  </a>
                </nav>
                <p className="text-gray-300 text-base mt-2">規約</p>
                <nav className="flex flex-row sm:flex-col items-center text-sm m-0 p-0 text-gray-400 gap-2">
                  <Link href="">定款</Link>
                  <Link href="">利用規約</Link>
                  <Link href="">プライバシーポリシー</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
