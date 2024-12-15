import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: ${props => props.theme['base-profile']};
  border-radius: 10px;
  padding: 2rem 2rem 2rem 2.5rem;
  margin-bottom: 4.5rem;
  filter: drop-shadow(0 2px 28px #00000020);
  
  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    border-radius: 8px;
    width: 9.25rem;
  }

  @media (max-width: 662px) {
    flex-direction: column;
    img {
      width: 12rem;
    }
  }

`

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;

  p {
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 1.5rem;
    line-height: 130%;
    color: ${props => props.theme['base-title']};
  }

  a {
    position: relative;
    display: flex;
    align-items: center;
    line-height: 0;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    color: ${props => props.theme['blue']};

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: ${props => props.theme['blue']};
      transition: width 0.2s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }

  }

`

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 662px) {
    flex-direction: column;
  }

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    span {
      font-size: 0.875rem;
    }

    svg {
      color: ${props => props.theme['base-label']};
    }
  }

`