import { sanitize } from 'dompurify';
import React, { ReactHTML } from 'react';

const sanitizeInnerHtml = (input: string | React.ReactNode) => ({
  dangerouslySetInnerHTML: {
    __html: sanitize(input as string),
  },
});

export const Raw: React.FC<Props> = ({ t = 'p', className, children }) => {
  return React.useMemo(() => {
    return React.createElement(t, {
      className,
      ...sanitizeInnerHtml(children),
    });
  }, [children, className, t]);
};

type Props = {
  t?: keyof ReactHTML;
  className?: string;
};
