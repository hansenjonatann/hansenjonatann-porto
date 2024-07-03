import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Compass, Download } from "lucide-react";

const Banner = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center py-32 md:flex-row">
        <div className="md:w-1/2">
          <div className="flex-col">
            <p className=" text-base md:text-xl">Halo 👋 , saya</p>
            <h1 className="text-3xl font-bold text-blue-700 md:text-5xl">
              Hansen Jonatan
            </h1>
            <h2 className=" text-muted-foreground mt-3 text-lg font-semibold md:text-2xl">
              Mahasiswa{" "}
              <span className="font-bold text-black"> & Konten Kreator</span>
            </h2>

            <p className="mt-8 w-96 md:mt-6">
              Seorang mahasiswa yang memiliki ketertarikan di bidang pemograman
              , dan memiliki mimpi menjadi seorang{" "}
              <span className="font-bold text-blue-600">
                Full Stack Developer
              </span>
            </p>

            <div className="mt-5 flex">
              <Link href={"/"} className={buttonVariants()}>
                {" "}
                <Download className="mr-4" /> Unduh CV
              </Link>
              <Button variant={"ghost"}>
                <Compass className="mr-2" />
                Jelajahi Profil Saya
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2">
          <Image
            width={300}
            height={300}
            className="border-1 rounded-circle w-96 md:mx-24  "
            src={"/profile.png"}
            alt="Hansen Jonatan"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
