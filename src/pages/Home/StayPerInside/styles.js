import styled from 'styled-components'

export const Container = styled.section`
  padding: 8.188rem 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  margin: auto;
  width: 40.813rem;
  height: 424px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: inset 0px 0px 50px var(--unnamed-color-00c8db);
  border: 1.5px solid var(--unnamed-color-00c8db);
  background: #0B1617 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 50px #00C8DB;
  border: 2px solid #00C8DB;
`;

export const Title = styled.h2`
  padding-bottom: 1.688rem;
  font-size: 2.875rem;
  font-family: 'GoshaSans';
  color: var(--color_white);
`;

export const Text = styled.p`
  max-width: 462px;
  font-size: 1.125rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_white);
`;

export const ContentRegister = styled.div`
  padding-top: 3rem;
  padding-bottom: .469rem;
  width: 18.063rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color_red);
  cursor: pointer;
`;

export const TextRegister = styled.p`
  font-size: 1rem;
  font-family: 'CabinetGrotesk-Medium';
  color: var(--color_red);
`;

export const Img = styled.img`
  margin-right: 1rem;
  
  :hover {
    transition: transform 1s;
    transform: translateX(.875rem);
  }
`;
