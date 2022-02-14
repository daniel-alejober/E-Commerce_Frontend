import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageProduct = styled.img`
  height: 75%;
  z-index: 100;
`;
export const ImageCart = styled.img`
  width: 20rem;
`;

export const ImageSlide = styled.img`
  height: 80%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
export const Payment = styled.img`
  width: 50%;
`;
export const ImageBuy = styled(Image)`
  height: 90vh;
`;
