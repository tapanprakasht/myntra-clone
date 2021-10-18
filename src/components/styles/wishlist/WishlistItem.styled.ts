import styled from "styled-components";

export const StyledWishlistItem = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 400px;
    width: 210px;
    border: 1px solid ${({ theme }) => theme.colors.seperator_color};

    & > img {
        width: 100%;
        object-fit: contain;
    }
`
export const CloseButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.seperator_color};
    border-radius: 50%;
    padding: 5px;
    height: 20px;
    width: 20px;
    color: ${({ theme }) => theme.colors.secondary_text_color};
    font-size: 13px;
`

export const MoveToBag = styled.div`
    margin-top: 20px;
    padding: 10px;
    width: 100%;
    text-align: center;
    border-top: 1px solid ${({ theme }) => theme.colors.seperator_color};
    color: ${({ theme }) => theme.colors.pink_text_color};

    & span {
        cursor: pointer;
    }
`