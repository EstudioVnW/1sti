import styled from 'styled-components'

export const Video = styled.video`
    /* position: fixed;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%; */
    width: 99vw;
    height: 100vh;
`;


export const ContentButton  = styled.div`
    display: flex;

    :button :last-child{
        background-color: pink;
    }
`;