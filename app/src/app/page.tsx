import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <main>
      <p>
        <Link href="./readGlobalVar">ReadGlobalVar</Link>
      </p>
      <p>
        <Link href="./writeGlobalVar">WriteGlobalVar</Link>
      </p>
      <p>
        <Link href="./sampleContextPage">SampleContextPage</Link>
      </p>
      <p>
        <Link href="./sampleContextsPage">SampleContextsPage</Link>
      </p>
    </main>
  );
};
export default Home;
