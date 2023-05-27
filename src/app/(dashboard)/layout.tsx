import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data fetching",
  description: "SSR, SSG and ISR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-sky-500/20">
      <section className="py-20">
        <div className="container">
          <Header />
          {children}
        </div>
      </section>
    </div>
  );
}
