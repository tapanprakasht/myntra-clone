import styled from "styled-components";

export const StyledGridItem = styled.div`
    height: 360px;
    width: 210px;
    position: relative;

    & > img {
        width: 100%;
        object-fit: contain;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 2px 16px 4px rgb(40 44 63 / 7%);
    }
`
export const GridItemFront = styled.div`
    padding: 5px 10px;

    & > div:nth-child(2) {
        font-weight: 500;
        font-size: 13px;
        color: ${({theme}) => theme.colors.secondary_text_color};
        padding: 3px 0;
    }
`
export const PriceSection = styled.div`
    & > span {
        padding-right: 5px;
    }
    & > span:nth-child(1) {
        font-size: 15px;
        font-weight: 500;
    }
    & > span:nth-child(2) {
        font-size: 12px;
        text-decoration: line-through;
        color: ${({theme}) => theme.colors.secondary_text_color};
    }
    & > span:nth-child(3) {
        font-size: 12px;
        color: ${({theme}) => theme.colors.orange_text_color};
    }
`


interface GridItemBackProps {
    show: boolean;
}

export const GridItemBack = styled.div<GridItemBackProps>`
    display: ${ ({ show }) => show ? 'block': 'none' };
    position: absolute;
    bottom: 35px;
    width: 100%;
    background: white;
    padding: 5px 10px;

    & > div:nth-child(2) {
        font-size: 14px;
        color: ${({theme}) => theme.colors.secondary_text_color};
    }
`
export const WishList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${({theme}) => theme.colors.seperator_color};
    border-radius: 3px;
    padding: 5px 0;
    margin: 10px 0;

    & > img {
        height: 15px;
        padding-right: 5px;
    }

    & > span {
        font-size: 13px;
    }

    &:hover {
        border: 1px solid black;
    }
`