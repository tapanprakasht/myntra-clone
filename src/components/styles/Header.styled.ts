import styled from 'styled-components';

export const StyledHeader = styled.div`
    display: flex;
    position: sticky;
    top: 0px;
    height: 80px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px 0 rgb(0 0 0 / 5%);
    z-index: 100;
    background: white;
`

export const Logo = styled.img`
    height: 40px;
    margin-left: 40px;
    margin-right: 40px;
`
export const HeaderMainContent= styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
`
export const HeaderNav = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    & > div {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 25px;
        font-size: 13px;
        font-weight: bold;
        border-bottom: 3px solid transparent;
    }

    & > div:hover {
        cursor: pointer;
        border-bottom: 3px solid;
    }

    & > div:hover:nth-child(1) {
        border-color: red;
    }
    & > div:hover:nth-child(2) {
        border-color: #f637b4;
    }
    & > div:hover:nth-child(3) {
        border-color: #e75110;
    }
    & > div:hover:nth-child(4) {
        border-color: #edb712;
    }
    & > div:hover:nth-child(5) {
        border-color: #19aa9f;
    }

    @media (max-width: ${ ({ theme }) => theme.tablet }) {
        display: none;
    }
`

export const Search = styled.div`
    display: flex;
    width: 50%;
    background: ${({ theme }) => theme.colors.search_background };
    border-radius: 4px;
    align-items: center;
    height: 40px;
    margin-right: 40px;

    & > img {
        height: 25px;
        padding-left: 10px;
    }

    & > input {
        width: 100%;
        border: none;
        background: ${({ theme }) => theme.colors.search_background };
        padding-left: 5px;
    }

    & > input:focus {
        outline: none;
    }

    @media (max-width: ${ ({ theme }) => theme.tablet }) {
        width: 100%;
    }
`

export const HeaderOptions = styled.div`
    display: flex;
    margin-right: 40px;
    font-size: 13px;
    font-weight: 600;

    & > div {
        padding: 0 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > img {
            height: 20px;
        }
    }

    &:hover {
        cursor: pointer;
    }
`