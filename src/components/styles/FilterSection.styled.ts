import styled from "styled-components";

export const StyledFilterSection = styled.div`
    width: 280px;
    margin-left: 40px;
    position: sticky;
    top: 40px;
    height: 100vh;
`

export const StyledFilterSeperator = styled.div`
    width: 100%;
    height: 1px;
    padding: 10px 0;
    border-right: 1px solid ${({theme}) => theme.colors.seperator_color };

    & > div {
        height: 1px;
        background: ${({theme}) => theme.colors.seperator_color };
    }
`

export const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 0px;
    border-bottom: 1px solid ${({theme}) => theme.colors.seperator_color };

    & > div:first-child {
        font-size: 15px;
        font-weight: 600;
    }
    & > span:last-child {
        cursor: pointer;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.pink_text_color};
        font-weight: 500;
        padding-right: 10px;
    }
`