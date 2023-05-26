import Link from "next/link";

const Page = () => {
  return (
    <>
      <nav className="container flex justify-between mt-6 py-10">
        <ul className="flex gap-12">
          <li>
            <Link href="/ssg" className="font-medium underline text-emerald-800">
              SSG (static)
            </Link>
          </li>
          <li>
            <Link href="/isr" className="font-medium underline text-emerald-800">
              ISR (revalidate)
            </Link>
          </li>
          <li>
            <Link href="/ssr" className="font-medium underline text-emerald-800">
              SSR (dynamic)
            </Link>
          </li>
        </ul>
        <ul className="flex gap-12">
          <li>
            <Link href="/login" className="font-medium underline text-emerald-800">
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="font-medium underline text-emerald-800">
              Register
            </Link>
          </li>
        </ul>
      </nav>
      <section className="py-10">
        <div className="container">
          <h1 className="text-3xl font-bold">Home page</h1>
        </div>
      </section>
    </>
  );
};

export default Page;
