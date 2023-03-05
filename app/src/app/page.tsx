import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <Link href="./readGlobalVar">ReadGlobalVar</Link>
      <Link href="./writeGlobalVar">WriteGlobalVar</Link>
    </main>
  );
};
export default Home;
