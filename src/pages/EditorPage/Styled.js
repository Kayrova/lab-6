import styled from "styled-components";

export const EditorPageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 600px;
  max-width: max-content;
  height: 800px;
  max-height: max-content;
`;

export const EditorField = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid #e1e1ec;
  background: #ffffff;
  border-radius: 10px;

  padding: 24px;

  min-width: max-content;
  width: 600px;

  height: 740px;
  max-height: max-content;

  white-space: normal;

  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  --moz-scrollbar-width: none;
`;

export const EditorText = styled.span`
  display: block;

  min-width: max-content;

  height: 32px;

  font-weight: 600;
  font-size: 24px;
  color: #0f0f0f;
`;

export const DownLoadLink = styled.a`
  display: block;
  max-width: max-content;
  margin-top: 20px;

  padding: 11px 40px;
  background: #2e2fa0;
  border-radius: 4px;

  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
`;
