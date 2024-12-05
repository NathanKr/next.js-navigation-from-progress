"use client";

import useNavigationStore from "@/store/navigation-store";

export default function FromPageLoader() {
  const { isNavigating } = useNavigationStore();
  // useEffect(()=>{
  //   console.log('useEffect on FromPageLoader load');
  //   endNavigation();
  // }, []);

  return isNavigating ? <div className="loader">Loading...</div> : null;
}
