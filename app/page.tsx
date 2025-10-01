import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { GrFormNextLink } from "react-icons/gr";
import { IoIosMore, IoMdHourglass } from "react-icons/io";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quirylab - ホーム",
  description: "QuiryLabの公式サイトです",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <section className="text-center items-center flex flex-col gap-6 p-16 md:p-20">
        <h1 className="text-4xl font-extrabold mt-16 tracking-tight">
          ようこそQuiryLabへ!
        </h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          自由に模索し、情報共有できるコミュニティです！あなたの参加をぜひお待ちしています！
        </p>
        <div className="flex gap-4 justify-center mt-4">
          <Button className="px-6 py-2 text-base font-semibold hover:bg-gray-800 text-gray-200 border border-gray-300 flex items-center gap-2">
            参加する
            <GrFormNextLink />
          </Button>
          <Button className="px-6 py-2 text-base font-semibold bg-white hover:bg-gray-200 text-gray-800 border border-gray-300 flex items-center gap-2 ">
            詳しく見る
            <GrFormNextLink />
          </Button>
        </div>
      </section>
      <section className="mt-20 p-8 w-full flex flex-col items-center text-center gap-8 bg-white border-t shadow-sm">
        <h2 className="text-3xl font-bold mb-2">提供しているサービス</h2>
        <p className="mb-6 max-w-2xl">
          私たちはこのようなサービスを提供しています
        </p>
        <div className="flex flex-col items-center w-full gap-4">
          <h3 className="text-2xl font-semibold mb-2">一般公開</h3>
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400">Coming Soon...</p>
            <IoMdHourglass className="w-8 h-8 text-gray-300 animate-spin" />
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-4">
          <h3 className="text-2xl font-semibold mb-2">メンバー向け</h3>
          <div className="flex gap-6 justify-center w-full flex-wrap">
            <Card className="w-[320px] border bg-white gap-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  メールアドレス
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  メンバー専用のメールアドレスを提供します。連絡や情報共有に便利です。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-[320px] border bg-white gap-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  サーバー提供
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  サーバーを提供します。研究データの保存や共有に利用できます。
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="w-[320px] border bg-white gap-2 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg font-bold">
                  サブドメイン提供
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  サブドメインを提供します。個人のサイトやプロジェクトを公開する際に最適です。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <IoIosMore className="w-10 h-10 text-gray-400 mt-2" />
        </div>
      </section>
      <section className="p-8 w-full flex flex-col items-center text-center gap-8 bg-white border-y shadow-sm">
        <h2 className="text-3xl font-bold mb-2 text-center">最新情報</h2>
        <p className="mb-6 max-w-2xl text-center mx-auto">
          最新のニュースやアップデートをお届けします。
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-400">Coming Soon...</p>
          <IoMdHourglass className="w-8 h-8 text-gray-300 animate-spin" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
