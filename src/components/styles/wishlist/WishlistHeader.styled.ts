import styled from "styled-components";

export const StyledWishlistHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 40px 0;

    & > span:first-child {
        font-size: 19px;
        padding-right: 10px;
    }

    & > span:last-child {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.secondary_text_color};
    }
`