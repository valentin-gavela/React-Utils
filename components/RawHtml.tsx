// @ts-nocheck

import { sanitize } from 'dompurify';
import React, { ReactHTML, useRef } from 'react';

const sanitizeInnerHtml = (input: string | React.ReactNode) => ({
  dangerouslySetInnerHTML: {
    __html: sanitize(input as string),
  },
});

const useRemoveElementKeepingChildren = () => {
  const ref = useRef();

  const remove = (r: React.MutableRefObject) => {
    ref.current = r;

    if (!r) return Promise.resolve();

    ref.current.childNodes.forEach((node) =>
      ref.current.parentElement.appendChild(node)
    );
    ref.current.remove();

    return Promise.resolve();
  };

  return { remove };
};

/**
 * This component allows the safe creation of an htmlString element
 * @param t If you ignore this param, we just add htmlString without
 * wrapping the htmlString.
 * `<div class="red">Hello I'm red</div>`
 */
export const Raw: React.FC<Props> = ({ t, className, children }) => {
  const { remove } = useRemoveElementKeepingChildren();

  return React.useMemo(() => {
    /**
     * Si no se le ingresa el "t" como param,
     * agregamos una 'p' para tener un parent en el DOM */
    return React.createElement(t || 'p', {
      className,
      ...sanitizeInnerHtml(children),
      ref: async (r) => {
        if (!t) {
          /**
           * Luego removemos el padre dejando los hijos */
          await remove(r);
        }
      },
    });
  }, [children, className, remove, t]);
};

type Props = {
  t?: keyof ReactHTML;
  className?: string;
};
