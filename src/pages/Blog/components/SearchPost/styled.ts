import styled from "styled-components";

export const SearchForm = styled.form`
  margin-top: 0.75rem;
  margin-bottom: 3rem;

`

export const SearchInput = styled.input`
  position: relative;
  border: 0;
  border-radius: 6px;
  border: 1px solid ${props => props.theme['base-border']};
  background-color: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};
  font-size: 1rem;
  padding: 0.75rem 1rem;
  line-height: 0;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }

`