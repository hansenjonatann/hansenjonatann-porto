import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section
        id="tentang"
        className="m-8 mt-14 flex-col items-center justify-center  md:m-0 md:mt-0 md:flex"
      >
        <h1 className=" text-center text-xl font-bold text-blue-800">
          Tentang Saya
        </h1>
        <div className="mt-8 flex  w-full flex-col-reverse md:flex-row-reverse">
          <div className="md:w-1/2">
            <div className="flex-col">
              <p>
                Perkenalkan nama saya{" "}
                <span className="font-bold">Hansen Jonatan</span> , saya adalah
                salah satu mahasiswa aktif jurusan{" "}
                <span className="font-bold">Sistem Informasi</span> di salah
                satu universitas yang berada di kota{" "}
                <span className="font-bold">Batam</span> , yaitu{" "}
                <a
                  href="www.uib.ac.id"
                  className="font-bold text-blue-500"
                  target="__blank"
                >
                  Universitas Internasional Batam
                </a>
                . Saya memulai ketertarikan saya di bidang teknologi sejak saya
                kelas 1 SD , saya sudah mengikuti eskul komputer, kemudian pada
                saat tamat SMK jurusan Akuntansi , saya mencoba mendalami
                pengetahuan saya di bidang teknologi dengan cara mengambil
                jurusan Sistem Informasi pada saat menempuh pendidikan sarjana.
                Sebelum memasuki dunia perkuliahan , saya sudah mempelajari
                materi tentang programming dasar secara otodidak, dan saya
                mengumpulkan berbagai macam{" "}
                <Link href="#" className="font-bold">
                  sertifikat elektronik{" "}
                </Link>{" "}
                dari hasil pembelajaran saya secara otodidak , dan beberapa{" "}
                <Link href={"/"} className="font-bold">
                  Portofolio
                </Link>{" "}
                yang saya buat
              </p>

              <p className="mt-5">
                Dengan ketertarikan saya di bidang teknologi , pada tahun 2022
                saya memiliki ide untuk membangun sebuah Startup yang bernama{" "}
                <span className="font-bold"> HJ Codin</span>, kemudian pada
                tahun 2024 Semester 4 Perkuliahan , saya mengubah nama Startup
                menjadi{" "}
                <a
                  href="hjcodin.tech"
                  target="__blank"
                  className="font-bold text-blue-900"
                >
                  HJ Codin Tech
                </a>{" "}
                yang sampai saat ini digunakan. Startup yang saya dirikan belum
                mempunyai bentuk fisik , jadi startup saya masih bersifat
                digital.
              </p>
            </div>
          </div>

          <div className=" mb-8 md:mb-0 md:w-1/2">
            <Image
              src="/hjcodintech.jpg"
              width={200}
              height={200}
              className="w-96 rounded-full "
              alt="HJ Codin Tech"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
