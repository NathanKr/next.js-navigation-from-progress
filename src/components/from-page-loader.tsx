"use client";

import useNavigationStore from "@/store/navigation-store";
import TopLoader from "./top-loader";

export default function FromPageLoader() {
  const { isNavigating } = useNavigationStore();

  return isNavigating ? <TopLoader/> : null;
}
