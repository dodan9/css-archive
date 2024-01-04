import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    position: relative;
  }
  body {
    margin: 0;
    overflow-x: hidden;
  }
  #root {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
