import { charPerLine } from "pages/EditorPage/EditorPage";

export const newLineSymbol = "\n";

export const newLineValidation = (str) => {
  const strLength = str.length;

  if (strLength >= charPerLine)
    return str
      .split(newLineSymbol)
      .join("")
      .split("")
      .map((charItem, charIndex) => {
        if ((charIndex + 1) % charPerLine === 0) {
          return `${charItem}${newLineSymbol}`;
        }

        return charItem;
      })
      .join("");

  return str;
};
