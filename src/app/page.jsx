import { AspectRatio, Container } from "@mantine/core";
import Image from "next/image";

const Home = () => {
  return (
    <Container size={"lg"}>
      <div className="top-landing">
        <AspectRatio ratio={1080 / 400}>
          <Image src={"/images/top-bg.jpg"} alt={""} fill={true} />
        </AspectRatio>
        <div className="navbar flex items-center h-[80px]  px-4">
          <Image
            src={"/images/profile.jpeg"}
            height={160}
            width={160}
            alt="profile"
            className="rounded-full translate-y-[-40px] border-[6px]"
          />
          <h1 className="text-2xl font-semibold ms-4">Dr. Montazeri</h1>
        </div>
      </div>
    </Container>
  );
};

export default Home;
