import styled from 'styled-components'


export const Container = styled.div`
  margin-top: .625rem;
  padding: 0 4.625rem;
  width: 100vw;
  height: 4.625rem;
  background-color: var(--color_white);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 2.813rem;
`

export const Ul = styled.ul`
  display: flex;
`

export const List = styled.li`
  margin-right: 2.313rem;
  color: var(--color_black);
  font-size: 1.125rem;
  font-weight: 700;
  list-style: none;
  letter-spacing: 0px;
  cursor: pointer;
  
  :hover {
    border-bottom: 2px solid #0B1617;
  }
`
