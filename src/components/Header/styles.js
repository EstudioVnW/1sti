import styled from 'styled-components'

export const Video = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
`;


export const ContentButton  = styled.div`
    display: flex;

    :button :last-child{
        background-color: pink;
    }
`;