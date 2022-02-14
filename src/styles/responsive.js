import { css } from "styled-components";

export const mobil = (props) => {
  return css`
    @media (max-width: 900px) {
      ${props}
    }
  `;
};
