import styled from 'styled-components'

export const Button = styled.button`
  padding: 0 1.438rem;
  height: 3.688rem;
  font-size: 1.063rem;
  font-weight: 700;
  color: var(--color_black);
  background: ${props => props.noBackground ? 'transparent' : `var(--color_white)`};
  border: 1px solid var(--color_white);
  border-radius: 5px;
  display: flex;
  align-items: center;
`

export const IconPlay = styled.img`
  padding-right: 0.5rem;
`
