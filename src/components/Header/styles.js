import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`;

export const Video = styled.video`
  position: absolute;
  top: -4px;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow-x: hidden;
`;

export const ContentButton  = styled.div`
  padding: 2.438rem 0 0 4.563rem;
  display: flex;

  :button :last-child{
    background-color: pink;
  }
`;