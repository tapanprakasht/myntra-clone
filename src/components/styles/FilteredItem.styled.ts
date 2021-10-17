import styled from "styled-components";

export const StyledFilteredItem = styled.div`
    display: inline-block;
    color: ${({theme}) => theme.colors.secondary_text_color };
    font-size: 13px;
    padding: 3px 10px;
    margin: 2px 3px;
    border-radius: 500px;
    border: 1px solid ${({theme}) => theme.colors.seperator_color };
    cursor: pointer;

    & > span {
        cursor: pointer;
        padding-left: 5px;
        color: #888a93;
    }

    &:hover {
        border: 1px solid ${({theme}) => theme.colors.third_text_color };
    }
`