import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-[#0A0A1A] font-sans overflow-hidden p-5 md:p-10">
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4/5 md:w-3/5 lg:w-1/2 h-1/2 bg-red-700 rounded-full opacity-40 blur-3xl z-0"></div>
      
      <div className="z-10 -mt-10 mb-2 md:mb-4 flex items-center justify-center">
        <Image
          src="/images/logo.png"
          width={250}
          height={250}
          alt="Logo"
          className="w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64"
        />
      </div>
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 text-white z-10 text-center">
        🚧 Under Construction 🚧
      </h1>
      <p className="text-lg md:text-xl text-gray-200 z-10 text-center mb-2">
        Our website is currently under construction.
      </p>
      <p className="text-lg md:text-xl text-gray-200 z-10 text-center">
        We'll be live soon! Stay tuned.
      </p>
    </div>
  );
}