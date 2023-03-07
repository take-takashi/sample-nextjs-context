import { NextPage } from "next";
import Link from "next/link";

type Page = {
  page: string; // ページのパス
  description: string; // ページの説明
};

const links: Page[] = [
  {
    page: "./readGlobalVar",
    description: "Context APIを使ってグローバルなstateを読み取るサンプル",
  },
  {
    page: "./writeGlobalVar",
    description:
      "【失敗】Context APIを使ってグルーバルなstateを書き込むサンプル",
  },
  {
    page: "./sampleContextPage",
    description: "Context APIを使ってグローバルなstateを読み書きするサンプル",
  },
  {
    page: "./sampleContextsPage",
    description:
      "【結論】Context APIを使って複数のグローバルなstateを読み書きするサンプル",
  },
];

const Home: NextPage = () => {
  return (
    <main>
      {links.map((page) => {
        return (
          <p key={page.page}>
            <Link href={page.page}>{page.description}</Link>
          </p>
        );
      })}
    </main>
  );
};
export default Home;
