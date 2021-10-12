import styled from "styled-components";

export const StyledFilterSection = styled.div`
    width: 280px;
    margin-left: 40px;
    border-right: 1px solid ${({theme}) => theme.colors.seperator_color };
    position: sticky;
    top: 80px;
    height: 100vh;
`

export const FilterSeperator = styled.div`
    width: 100%;
    height: 1px;
    margin: 10px 0;
    background: ${({theme}) => theme.colors.seperator_color };
`