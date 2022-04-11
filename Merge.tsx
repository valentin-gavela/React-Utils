import React = require('react');

const wordPlaceholderRegexToSplitAndKeepSeparator = /(\{[a-zA-Z0-9_]+\})/g;
const wordPlaceholderRegex = /\{[a-zA-Z0-9_]+\}/;

export const Merge: React.FC<{ text: string; className?: string }> = ({
  text,
  children,
  className,
}) => {
  const childrens = React.Children.toArray(children); // Yes, childrenS

  const result = React.useMemo(
    () =>
      text.split(wordPlaceholderRegexToSplitAndKeepSeparator).map((item) => {
        if (item.match(wordPlaceholderRegex)) {
          return childrens.shift();
        }

        return item;
      }),

    [text, children, className]
  );

  return <div className={className}>{result}</div>;
};
