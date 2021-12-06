import { charPerLine, cursor } from "pages/EditorPage/EditorPage";

export const changeCursorPosition = (str, keyCode) => {
  const cursorPosition = str.indexOf(cursor);

  const strWithOutCursor = `${str.slice(0, cursorPosition)}${str.slice(
    cursorPosition + 1
  )}`;

  switch (keyCode) {
    // Up
    case 38:
      if (cursorPosition > charPerLine) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition - charPerLine
        )}${cursor}${strWithOutCursor.slice(cursorPosition - charPerLine)}`;
      }
      break;

    // Down
    case 40:
      if (cursorPosition < str.length - charPerLine) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition + charPerLine
        )}${cursor}${strWithOutCursor.slice(cursorPosition + charPerLine)}`;
      }
      break;

    // Left
    case 37:
      if (cursorPosition > 0) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition - 1
        )}${cursor}${strWithOutCursor.slice(cursorPosition - 1)}`;
      }
      break;

    // Right
    case 39:
      if (cursorPosition + 1 < str.length) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition + 1
        )}${cursor}${strWithOutCursor.slice(cursorPosition + 1)}`;
      }
      break;

    default:
      return str;
  }

  return str;
};
