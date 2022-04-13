import { useEffect, useState } from 'react';

/** Use to detect when a dom object is on viewport
 * Pass an element's ref
 * pass a margin if you want
 */
export const useIsOnViewport = (
  element: React.MutableRefObject<undefined>,
  rootMargin = '0px'
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          // observer.unobserve(element.current);
        } else {
          setState(false);
        }
      },
      {
        rootMargin,
      }
    );

    // eslint-disable-next-line no-unused-expressions
    element.current && observer.observe(element.current);

    return () => {
      if (element?.current) observer.unobserve(element.current);
    };
  }, []);

  return isVisible;
};
