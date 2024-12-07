"use client";

import useNavigation from "@/hooks/use-navigation";

export default function Page1() {
  const { navigateToInternalPage, navigateToExternalPage } = useNavigation();

  const navigateToInternal = () => {
    navigateToInternalPage("/");
  };

  const navigateToExternal = () => {
    navigateToExternalPage("https://www.example.com");
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
