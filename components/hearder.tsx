"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const MenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <header className="relative flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <Image
              src={"/icon.png"}
              width={100}
              height={100}
              alt="logo"
              className="w-12 h-12"
            />
            <h1 className="text-2xl">QuiryLab</h1>
          </div>
          <nav className="flex items-center gap-3 text-lg m-0 p-0">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/service"}>Service</Link>
          </nav>
        </div>
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={MenuOpen}
        >
          <HiOutlineMenuAlt3 className="w-12 h-12 p-2" />
        </button>
      </header>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex z-[9999]">
          <div
            className="w-[70vw] h-screen bg-gray-600 cursor-pointer opacity-50"
            onClick={MenuOpen}
          />
          <div className="w-[30vw] h-screen bg-black text-white flex flex-col relative">
            <button
              onClick={MenuOpen}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <IoClose className="w-12 h-12 p-2 text-white" />
            </button>
            <div className="flex flex-col items-center flex-1 p-12">
              <h2 className="text-2xl mb-4">メニュー</h2>
              <nav className="gap-4 flex flex-col items-center text-lg m-0 p-0">
                <Link href={"/"}>ホーム</Link>
                <Link href={"/about"}>QuiryLabについて</Link>
                <Link href={"/service"}>サービス</Link>
                <Link href={"/member"}>メンバー</Link>
              </nav>
              <div className="mt-auto flex flex-col items-center gap-2 justify-end">
                <p className="text-gray-300 text-base">外部リンク</p>
                <nav className="flex flex-col items-center text-sm m-0 p-0 text-gray-400">
                  <a href="">Twitter</a>
                  <a href="">Discord</a>
                </nav>
                <p className="text-gray-300 text-base">規約</p>
                <nav className="flex flex-col items-center text-sm m-0 p-0 text-gray-400">
                  <a href="">定款</a>
                  <a href="">利用規約</a>
                  <a href="">プライバシーポリシー</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
