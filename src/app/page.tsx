"use client"

import useNavigationStore from "@/store/navigation-store";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const {startNavigation} = useNavigationStore()

  const handleClick = () => {
    startNavigation(); // Start the loader
    router.push('/page1');
  };

  return (
    <>
      <h1>This is home page</h1>
      <button onClick={handleClick}>Navigate to Page1</button>
    </>
  );
}


