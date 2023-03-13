import { useCallback, useEffect, useState } from "react";
import { breakpoints } from "../../utils/breakpoints";



export const useMediaQuery = (widthMin,widthMax) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = widthMax? window.matchMedia(`(max-width: ${widthMax}px) and (min-width:${widthMin}px)`): window.matchMedia(` (min-width:${widthMin}px)`);

      media.addListener(updateTarget);
    console.log(media)
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

  

  