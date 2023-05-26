import "../globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auth",
  description: "Auth related pages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-indigo-500">
      <section className="py-20">
        <div className="container">
          <Header isWhite />
          {children}
        </div>
      </section>
    </div>
  );
}
