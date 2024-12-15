import styled from "styled-components";

export const PostContentContainer = styled.div`
  padding: 2.5rem 2rem;
  overflow: hidden;
  word-break: break-all;
  color: ${(props) => props.theme["base-text"]};

  h1,
  h2 {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme["base-label"]};
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
  }

  p:not(:first-child) {
    margin: 1.5rem 0;
  }

  a {
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    font-weight: bold;
  }

  hr {
    border: 1px solid ${props => props.theme['blue']};
    margin: 1rem 0;
  }

  ul {
    padding-left: 1.5rem;
  }

  blockquote {
    background-color: ${(props) => props.theme["base-post"]};
    padding: 1rem;
    border-radius: 8px;
  }

  pre {
    background-color: ${(props) => props.theme["base-input"]};
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 0.5rem;

    &::-webkit-scrollbar {
      height: 6px;
      background-color: ${props => props.theme['base-profile']};
      border-radius: 0 0 8px 8px;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme['base-title']};
      border-radius: 8px;
    }

  }

  code {
    background-color: ${props => props.theme['base-input']};
    overflow: hidden;
    border-radius: 8px;
    padding: 0.25rem;
  }

  img {
    width: 100%;
  }
`;
