import styled, { css } from "styled-components";
import { breakpoints } from "../../utils/breakpoints";
import "@fontsource/dm-sans";

const variantStyles = (variant = "primary") =>
  ({
    primary: css`
      color: #ffffff;
      background: #d92852;
      height: 30px;
      width: 100px;
      font-size: 1rem;
      font-weight: 600;
      border: none;

      border-radius: 30px;

      @media (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px) {
        width: 100px;
      }
    `,
    secondary: css`
      color: #b70932;
      background: white;
      height: 30px;
      width: 100px;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;

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

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DM Sans;

  ${({ variant }) => variantStyles(variant)}
`;

export default Chip;
