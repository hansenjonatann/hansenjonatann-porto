import { Download } from "lucide-react";
import About from "~/components/About";
import Banner from "~/components/Banner";

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <section className="mt-8" id="portofolio">
        <h1 className="text-center font-bold">Portofolio</h1>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-48 rounded-lg border shadow-md">
            <div className="flex-col"></div>
          </div>
        </div>
      </section>
    </>
  );
}
