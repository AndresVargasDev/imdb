import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-medium text-amber-600">Home</h1>
    </div>
  );
}
