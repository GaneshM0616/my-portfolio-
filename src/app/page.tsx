import Details from "@/components/Details";
import HomePageImage from "@/components/HomePageImage";

export default function Home() {
  return (
    <main className="mt-32 flex  justify-center min-h-screen">
      <div className="flex w-full max-w-5xl p-4">
        <div className="flex-5">
        <Details />
        </div>
        <div className="flex-5">
        <HomePageImage />
        </div>
        
      </div>
    </main>
  );
}
