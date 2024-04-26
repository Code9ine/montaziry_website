import { Button } from "@mantine/core";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div>In the name of Allah</div>
      <div>Started By Code9ine Company</div>
      <Link href={"/admin"}>
        <Button>admin</Button>
      </Link>
    </div>
  );
};

export default Home;
