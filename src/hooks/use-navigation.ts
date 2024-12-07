import useNavigationStore from '@/store/navigation-store';
import { useRouter } from 'next/navigation';

const useNavigation = () => {
  const { startNavigation } = useNavigationStore();
  const router = useRouter();

  /**
   * 
   * @param internalPage - e.g. /
   */
  const navigateToInternalPage = (internalPage : string) => {
    console.log("startNavigation");
    startNavigation(); // Start the loader
    router.push(internalPage);
  };

  /**
   * 
   * @param externalPage - e,g "https://www.example.com";
   */
  const navigateToExternalPage = (externalPage : string) => {
    console.log("startNavigation");
    startNavigation(); // Start the loader
    window.location.href = externalPage;
  };

  return { navigateToInternalPage,  navigateToExternalPage };
};

export default useNavigation;
