import { Button } from "@mantine/core";
import Link from "next/link";

const page = async () => {
  return (
    <div>
      <div>admin</div>
      <Link href={"/"}>
        <Button>home</Button>
      </Link>
    </div>
  );
};

export default page;
