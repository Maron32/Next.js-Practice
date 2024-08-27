import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <h1 className="text-6xl text-center my-36 ">Kamata</h1>
        <h2 className="text-4xl pt-44 py-5 text-center">About me</h2>
        <div className="flex justify-around pt-8 mx-72">
          <div className="size-56 px-3">
            <img src="/img/IMG_3202.jpg" alt="アイコン" />
          </div>
          <div className="px-3">
            <h3 className="text-3xl">鎌田　琉之介</h3>
            <p className="leading-7 pt-2">
              高度情報工学科 2年<br />
              目指してる資格：<br />
              基本情報技術者試験<br />
              応用情報技術者試験<br />
              マイクロオフィススペシャリスト<br />
              簿記三級
            </p>
          </div>
        </div>
    </Layout>
  );
}