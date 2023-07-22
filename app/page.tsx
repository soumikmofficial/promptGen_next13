import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Image
        src={
          "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
        }
        width={100}
        height={100}
        alt=""
      />
    </main>
  );
}
