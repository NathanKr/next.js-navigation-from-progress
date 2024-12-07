"use client";

import useNavigation from "@/hooks/use-navigation";

export default function Home() {
  const {navigateToInternalPage} = useNavigation()

  const handleClick = () => {
    navigateToInternalPage("/page1");
  };

  return (
    <>
      <h1>This is home page</h1>
      <button onClick={handleClick}>Navigate to Page1</button>
    </>
  );
}
