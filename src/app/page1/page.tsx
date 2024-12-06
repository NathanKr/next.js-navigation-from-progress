"use client";

import useNavigationStore from "@/store/navigation-store";
import { useRouter } from 'next/navigation';



export default function Page1() {
  const { startNavigation } = useNavigationStore();
  const router = useRouter();

  const navigateToInternal = () => {
    startNavigation(); // Start the loader
    router.push('/');
  };

  const navigateToExternal = () => {
    startNavigation(); // Start the loader
    window.location.href = "https://www.example.com";
  };

  return (
    <>
      <h1>This is Page1</h1>
      <button onClick={navigateToExternal}>Visit Example.com</button>
      <br />
      <button onClick={navigateToInternal}>Back to Home</button>
    </>
  );
}
