import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: .625rem;
  left: 0;
  right: 0;
  padding: 0 4.625rem 0 5.625rem;
  width: 100vw;
  height: 4.594rem;
  background-color: var(--color_grey01);
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 90%;
  z-index: 1;
  
  @media(max-width: 768px) {
    position: relative;
    top: 0;
    padding: 0;
    height: ${props => props.isOpenMenu && '100vh'};
    justify-content: initial;
    align-items: initial;
		flex-direction: column;
    overflow: hidden;
	}
`

export const ContainerLogo  = styled.div`
  @media(max-width: 768px) {
    margin-top: 0.625rem;
    padding: .563rem 0;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color_white);
	}
`

export const Logo = styled.img`
  width: 2.813rem;

  @media(max-width: 768px) {
    background-color: var(--color_white);
	}
`
export const ButtonMenu = styled.button`
  display: none;

  @media(max-width: 768px) {
    display: flex;
    position: absolute;
    right: 1.589rem;
    background: none;
    cursor: pointer;
	}
`
export const IconClose  = styled.img`
  width: 1.635rem;
`
export const ContentMenu = styled.div`
  
  @media(max-width: 768px) {
    height: 100%;
    display: ${props => props.isOpenMenu ? 'flex' : 'none'};
    flex-direction: column;
    background-color: var(--color_lightBlack);
    overflow: scroll;
  }
`
export const Ul = styled.ul`
  display: flex;

  @media(max-width: 768px) {
    padding-top: 6.5rem;
    display: ${props => props.isOpenMenu ? 'flex' : 'none'};
    background-color: var(--color_lightBlack);
		flex-direction: column;
	} 
`

export const List = styled.li`
  margin-left: 2.313rem;
  font-size: 1.125rem;
  font-family: ${props => props.fontRegular ? 'GoshaSans' : 'GoshaSans-Bold'};
  color: var(--color_lightBlack);
  list-style: none;
  letter-spacing: 0px;
  border-bottom: ${props => props.border && `2px solid var(--color_lightBlack)`};
  cursor: pointer;
  
  :hover {
    border-bottom: 2px solid var(--color_lightBlack);
  }

  @media(max-width: 850px) {
    margin-left: 1rem;
	}

  @media(max-width: 768px) {
		/* display: none; */
    margin-left: 3.188rem;
    padding-bottom: 2rem;
    font-size: 2.063rem;
    color: var(--color_white);
    border: none;
	}
`
