/* eslint-disable prettier/prettier */
import { Navbar } from "@/src/components/ui/navbar";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex flex-col h-screen">
      <Navbar />
      <main>
        {children}
      </main>
    </section>
  );
}
