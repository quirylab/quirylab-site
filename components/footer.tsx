import Link from "next/link";
import Image from "next/image";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
export default function Home() {
  return (
    <footer className="mt-auto p-4 bg-gray-800 text-white">
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col gap-2">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="logo"
              className="w-10 h-10 sm:w-12 sm:h-12"
              width={100}
              height={100}
              src="/icon.png"
            />
            <h1 className="text-xl sm:text-2xl font-semibold">QuiryLab</h1>
          </Link>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-xs">
            自由に模索し、情報共有できるコミュニティです。
          </p>
          <div className="flex items-center text-gray-300 text-sm mb-3">
            info@quirylab.com
          </div>
          <div className="flex gap-4 mt-6">
            <a
              className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group shadow-sm"
              href="https://x.com/quiryLab"
            >
              <FaXTwitter className="w-5 h-5 text-gray-800 group-hover:text-blue-500 transition-all duration-300" />
            </a>
            <a
              className="w-10 h-10 bg-gray-100 hover:bg-indigo-100 rounded-full flex items-center justify-center transition-all duration-300 group shadow-sm"
              href="https://discord.gg/vJ6kf8SnYm"
            >
              <FaDiscord className="w-5 h-5 text-gray-800 group-hover:text-indigo-500 transition-all duration-300" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="font-bold text-xl">Infomation</h1>
          <nav className="flex flex-col gap-1 text-sm text-gray-300">
            <Link href="/">ホーム</Link>
            <Link href="/about">QuiryLabについて</Link>
            <Link href="/service">サービス</Link>
          </nav>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <h1 className="font-bold text-xl">Legal</h1>
          <nav className="flex flex-col gap-1 text-sm text-gray-300">
            <Link href="/terms-of-service">利用規約</Link>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
          </nav>
        </div>
      </div>
      <p className="text-sm text-gray-300 p-6 text-center">
        © 2025 QuiryLab. All rights reserved.
      </p>
    </footer>
  );
}
