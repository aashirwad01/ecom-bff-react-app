import styled, { css } from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import "@fontsource/dm-sans";

const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      color: #ffffff;
      background: #d92852;
      height: 44px;
      width: 150px;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      border-radius: 30px;
      transition: opacity 0.2s ease-in-out;
      :hover {
        background: #b70932;
      }
      @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
        width: 100px;
      }
    `,
    secondary: css`
      color:#B70932;
      background: #ffffff};
      height: 44px;
      width:   150px;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius:25px;
      cursor: pointer;
      :hover {
        background: #F2F2F2;
     
      }
      @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
        width: 100px;
      }
    `,
    // outlined: css`
    //   color: #F2AE00;
    //   background-color: transparent;
    //   height: 44px;
    //   width: 225px;
    //   font-size: ${typography.size.s3};
    //   font-weight: ${typography.weight.semibold};
    //   border: 1.5px solid;
    //   cursor: pointer;
    //   @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
    //     width: 100px;
    //   }
    // `,
  }[variant]);

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DM Sans;

  ${({ variant }) => variantStyles(variant)}
`;

export default Button;
