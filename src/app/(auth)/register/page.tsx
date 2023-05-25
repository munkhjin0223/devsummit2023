import { FunctionComponent } from "react";

interface PageProps {}

const Page: FunctionComponent<PageProps> = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-3xl font-bold mb-10 bg-emerald-100 w-fit px-2 text-emerald-800">Register</h1>
      </div>
    </section>
  );
};

export default Page;
