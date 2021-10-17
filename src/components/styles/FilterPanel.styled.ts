import styled from "styled-components";

export const StyledFilterPanel = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    padding-bottom: 6px;
    border-bottom: 1px solid ${({theme}) => theme.colors.seperator_color };

    & > *:first-child {
        align-self: flex-end;
    }
`

export const FirstSection = styled.div`
    width: 230px;
`
export const FilteredItemSection = styled.div`
    display: flex;
    padding-top: 10px;
    padding-left: 10px;
    align-items: flex-start;
    flex-wrap: wrap;
`