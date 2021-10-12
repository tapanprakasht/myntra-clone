import styled from "styled-components";

export const StyledFilterPanel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 40px;
    padding: 12px 0px;
    border-bottom: 1px solid ${({theme}) => theme.colors.seperator_color };

    & > div:first-child {
        font-size: 15px;
        font-weight: 600;
    }
`

export const FirstSection = styled.div`
    width: 230px;
`
export const SeccondSection = styled.div`
    flex-grow: 1;
`