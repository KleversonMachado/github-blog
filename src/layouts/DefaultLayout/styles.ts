import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${props => props.theme['base-background']};
  min-height: 100vh;

  color: ${props => props.theme['base-text']};

`

export const OutletContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  top: -5rem;
`