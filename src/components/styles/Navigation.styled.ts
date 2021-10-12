import styled from "styled-components";

export const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: ${({theme}) => theme.margin_left };

    a, a:hover {
        text-decoration: none;
        color: ${({theme}) => theme.colors.third_text_color};
    }
`

export const NavigationLinks = styled.div`
    span {
        padding: 0 5px;
        color: ${({theme}) => theme.colors.third_text_color};
    }

    & > a:last-child {
        color: ${({theme}) => theme.colors.primary_text_color};
        font-weight: 500;
    }
`
export const SelectedNavigation = styled.div`
    font-size: 17px;

    & > span:first-child {
        font-weight: 500;
    }

    & > span:last-child{
        color: ${({theme}) => theme.colors.third_text_color};
    }
`