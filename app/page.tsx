import Image from "next/image";

export default function Home() {
  return (
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
    </main>
  );
}
