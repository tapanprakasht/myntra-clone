import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;;
    align-items: center;
    justify-content: center;
    background : rgb(0, 0, 0, 0.4);
    z-index: 200;
    overflow: hidden;
`
export const ModalContainer = styled.div`
    width: 450px;
    height: 300px;
    background: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px;
`
export const Header = styled.div`
    align-self: flex-end;
    color: grey;
    & > span {
        cursor: pointer;
    }
`
export const Content = styled.div`
    padding: 0 15px 10px;
    display: flex;
    border-bottom: 1px solid #e5e5e7;

    img {
        height: 100px;
    }
`
export const TextSection = styled.div`
    display: flex;
    flex-direction: column;

    & > div:first-child {
        padding: 0 10px;
        font-size: 20px;
    }

    & > div:last-child {
        padding: 5px 10px;

        & > span {
            padding-right: 5px;
        }

        & > span:nth-child(1) {
            font-size: 18px;
            font-weight: 500;
        }

        & > span:nth-child(2) {
            font-size: 15px;
            text-decoration: line-through;
            color: #424453;
        }

        & > span:nth-child(3) {
            font-size: 15px;
            color: #fd7d4b;
        }
    }
`

export const SizeContainer = styled.div`
    padding: 10px 10px;
`
export const SizeSection = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 10px 0;

`
export const SizeItem = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #e5e5e7;
    margin: 0 3px;
    &:hover {
        border: 1px solid #94969f;
    }
`

export const DoneButton = styled.div`
    cursor: pointer;
    background: #ff3f6c;
    color: white;
    padding: 12px 0;
    margin: 0 10px;
    text-align: center;
    border-radius: 5px
`