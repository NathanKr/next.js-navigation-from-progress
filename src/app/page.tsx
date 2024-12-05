import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>This is home page</h1>
      <Link href="/page1">Navigate to Page1</Link>
    </>
  );
}
