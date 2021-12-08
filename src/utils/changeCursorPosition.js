import { charPerLine, cursor } from "pages/EditorPage/EditorPage";

export const changeCursorPosition = (str, keyCode) => {
  const cursorPosition = str.indexOf(cursor);

  const cursorLinePosition = Math.trunc((cursorPosition + 1) / charPerLine);

  const strWithOutCursor = `${str.slice(0, cursorPosition)}${str.slice(
    cursorPosition + 1
  )}`;

  switch (keyCode) {
    // Up
    case 38:
      if (cursorPosition > charPerLine) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition - charPerLine - cursorLinePosition
        )}${cursor}${strWithOutCursor.slice(
          cursorPosition - charPerLine - cursorLinePosition
        )}`;
      }
      break;

    // Down
    case 40:
      if (cursorPosition < str.length - charPerLine) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition + charPerLine + cursorLinePosition + 1
        )}${cursor}${strWithOutCursor.slice(
          cursorPosition + charPerLine + cursorLinePosition + 1
        )}`;
      }
      return `${strWithOutCursor}${cursor}`;

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

    // Home
    case 36:
      if (cursorPosition > 0) {
        return `${strWithOutCursor.slice(
          0,
          cursorPosition +
            1 -
            ((cursorPosition + 1) % charPerLine) +
            cursorLinePosition
        )}${cursor}${strWithOutCursor.slice(
          cursorPosition +
            1 -
            ((cursorPosition + 1) % charPerLine) +
            cursorLinePosition
        )}`;
      }
      break;

    // End
    case 35:
      if (
        cursorLinePosition === Math.trunc(strWithOutCursor.length / charPerLine)
      ) {
        return `${strWithOutCursor}${cursor}`;
      }

      return `${strWithOutCursor.slice(
        0,
        (cursorLinePosition + 1) * charPerLine + cursorLinePosition
      )}${cursor}${strWithOutCursor.slice(
        (cursorLinePosition + 1) * charPerLine + cursorLinePosition
      )}`;

    default:
      return str;
  }

  return str;
};
