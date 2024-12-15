import styled from "styled-components";

export const PostContainer = styled.div`
  

`

export const PostHeader = styled.header`
  background-color: ${(props) => props.theme["base-profile"]};
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;
  filter: drop-shadow(0 2px 28px #00000020);

  h2 {
    color: ${(props) => props.theme["base-title"]};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }
`;

export const PostHeaderLinks = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 0.25rem;
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    color: ${(props) => props.theme["blue"]};

    @media (max-width: 320px) {
      justify-content: center;
    }

    span {
      font-weight: bold;
    }

    svg:first-child {
      font-size: 1.25rem;
    }

    &::after {
      content: "";
      width: 0;
      height: 2px;
      background-color: ${(props) => props.theme["blue"]};
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.2s ease-in-out;

    }

    &:first-child::after {
      left: 50%;

      @media (max-width: 320px) {
        left: 50%;
      }
    }

    &:hover::after {
      width: 100%;
      
    }

    &:first-child:hover::after {
      width: 100%;
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    line-height: 0;

    span {
      font-size: 1rem;
      color: ${props => props.theme['base-span']};
    }

    svg {
      color: ${props => props.theme['base-label']};
    }
  }

  div:nth-child(2) {
    span::first-letter {
      text-transform: uppercase;
    }
  }

  

`
