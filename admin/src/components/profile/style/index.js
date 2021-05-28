import styled from 'styled-components'

export const Layout = styled.div`
    height: 100%;
    width: 100%;

    display: grid;
    place-items: center;

    background: #F5F8FF;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 36px 48px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 20px;
    text-align: center;

    p {
        margin-top: -10px;
        color: #777;
    }
`

export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        height: 200px;
        width: 200px;
        object-fit: cover;
        border-radius: 100px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        opacity: .4;

        position: absolute;
        z-index: 10;
        right: 5px;
        top: 4px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`