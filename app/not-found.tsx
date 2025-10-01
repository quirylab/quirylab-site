import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">
          お探しのページは見つかりませんでした。
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          ホームに戻る
        </Link>
      </main>
      <Footer />
    </div>
  );
}
