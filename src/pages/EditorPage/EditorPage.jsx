import React, { useCallback, useEffect, useRef, useState } from "react";

import {
  EditorPageContainer,
  EditorText,
  EditorField,
  DownLoadLink,
  ButtonContainer,
} from "./Styled";
import { newLineSymbol, newLineValidation } from "utils/newLineValidation";
import { changeCursorPosition } from "utils/changeCursorPosition";

const ignoreKeyCodeList = [
  18, 20, 17, 13, 27, 112, 113, 114, 115, 34, 33, 19, 44, 145, 16, 9, 116, 117,
  118, 119, 120, 121, 122, 123, 45, 144, 109, 106, 110, 111, 107, 191, 220,
];

export const cursor = "|";
export const charPerLine = 60;

const EditorPage = () => {
  const [text, setText] = useState(cursor);
  const loadRef = useRef(null);

  const onFileUpload = () => {
    const blob = new Blob([text.split(cursor).join("")], {
      type: "text/plain",
    });

    loadRef.current.href = URL.createObjectURL(blob);
  };

  const onFileAdd = (file) => {
    const reader = new FileReader();

    if (file[0]) {
      reader.readAsText(file[0]);

      reader.onload = function () {
        setText(`${newLineValidation(reader.result)}${cursor}`);
      };

      reader.onerror = function () {
        console.log(reader.error);
      };
    }
  };

  const onKeyPressHandler = useCallback(
    (event) => {
      switch (event.keyCode) {
        case 46:
          setText(cursor);
          break;
        case 36:
        case 35:
        case 37:
        case 38:
        case 39:
        case 40:
          setText(changeCursorPosition(text, event.keyCode));
          break;
        case 8:
          const cursorPosition = text.indexOf(cursor);

          if (cursorPosition > 0) {
            setText(
              `${text.slice(0, cursorPosition - 1)}${text.slice(
                cursorPosition
              )}`
            );
          }
          break;
        default:
          if (
            ignoreKeyCodeList.indexOf(event.keyCode) === -1 
          ) {
            const newTextState = newLineValidation(text);

            const cursorPosition = newTextState.indexOf(cursor);

            setText(
              `${newTextState.slice(0, cursorPosition)}${
                event.key
              }${newTextState.slice(cursorPosition)}`
            );
          }
      }
    },
    [text]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyPressHandler);

    return () => {
      document.removeEventListener("keydown", onKeyPressHandler);
    };
  }, [onKeyPressHandler]);

  return (
    <EditorPageContainer>
      <EditorField>
        {text.split(newLineSymbol).map((strItem) => (
          <EditorText>{strItem}</EditorText>
        ))}
      </EditorField>

      <ButtonContainer>
        <DownLoadLink
          download={"myText.txt"}
          href={"#"}
          ref={loadRef}
          onClick={onFileUpload}
        >
          Скачать
        </DownLoadLink>

        <input
          type={"file"}
          accept=".txt"
          onChange={(event) => onFileAdd(event.target.files)}
        />
      </ButtonContainer>
    </EditorPageContainer>
  );
};

export default EditorPage;
