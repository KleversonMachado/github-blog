import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BoxPostContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 662px) {
    grid-template-columns: 1fr;
  }

`

export const BoxPostStyle = styled(NavLink)`
  text-decoration: none;
  padding: 2rem;
  border: 2px solid ${props => props.theme['base-post']};
  border-radius: 10px;
  background-color: ${props => props.theme['base-post']};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  overflow: hidden;
  transition: border-color .2s;
  
  &:hover {
    border-color: ${props => props.theme['base-label']};
  }

  p {
    font-size: 1rem;
    color: ${props => props.theme['base-text']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

`

export const BoxPostHeader = styled.header`
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  h2 {
    color: ${props => props.theme['base-title']};
    font-size: 1.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    flex: 1;
  }

  span {
    font-size: 0.875rem;
    color: ${props => props.theme['base-span']};
  }

`