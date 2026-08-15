import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Fullstack",
  description: "Production grade Fullstack Next.js starter template",
};

const page = () => {
  return (
    <>
      <section className="space-y-4 text-center">
        <h1 className="text-5xl font-semibold">Next.js Starter Fullstack</h1>
        <h2 className="text-3xl">
          Production grade Fullstack Next.js starter template
        </h2>
      </section>
    </>
  );
};

export default page;
