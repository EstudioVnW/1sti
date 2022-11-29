import styled from 'styled-components'


export const Container = styled.div`
/* max-width: 684px; */
  div:first-child {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid var(--color_darkPurple);

    button {
      margin-top: 0;
    }

    @media(max-width: 768px) {
      flex-direction: column;

      button {
        margin-top: 1.125rem;
      }
    }
  }
`;

export const Text = styled.p`
  /* margin: auto; */
  margin-right: 5.938rem;
  max-width: 448px;
  font-size: 1.875rem;
  font-family: 'GoshaSans';
  color: var(--color_white);
  
  @media(max-width: 850px) {
    margin-right: 1.5rem;
  }

  @media(max-width: 768px) {
    max-width: 204px;
    margin-right: 0;
    font-size: 1.125rem;
    text-align: center;
  }
`;
