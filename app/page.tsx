import Image from "next/image";

export default function Home() {
  return (
<<<<<<< HEAD
    <main className="">
      <Image
        src={
          "https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
        }
        width={100}
        height={100}
        alt=""
      />
=======
    <main className="px-20 py-10">
      {/* hero section */}
      <div className="flex items-center flex-col gap-5 px-10">
        <h1 className="text-8xl font-bold ">PromptGen</h1>
        <b className="text-4xl bg-clip-text text-center text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          AI Powered Prompt Generator
        </b>
        <em className="text-center text-2xl">
          PromptGen is a AI powered prompt generator that generates prompts
          based on your input. YOu can create and share your prompts with the
          worked.
        </em>
      </div>
>>>>>>> 0c82d42ef7466a70a00f3189ffb346e10db960a4
    </main>
  );
}
