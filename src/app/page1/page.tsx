"use client";

import useNavigationStore from "@/store/navigation-store";

export default function Page1() {
  const { startNavigation } = useNavigationStore();

  const navigateToExternal = () => {
    startNavigation(); // Start the loader
    window.location.href = "https://www.example.com";
  };

  return (
    <>
      <h1>This is Page1</h1>
      <button onClick={navigateToExternal}>Visit Example.com</button>
    </>
  );
}
