import styled from "styled-components";

export const StyledFilter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 20px 0;
`

export const FilterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
interface DefaultHeaderProps {
    show: boolean;
}

export const DefaultHeader = styled.div<DefaultHeaderProps>`
    display: ${({ show }) => show ? 'flex' : 'none' };
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 28px;

    & > div {
        font-size: 15px;
        font-weight: 600;
    }

    img {
        height: 25px;
        width: 25px;
        border-radius: 50%;
    }
`

interface FilterSearchBarProps {
    show: boolean;
}

export const FilterSearchBar = styled.div<FilterSearchBarProps>`
    display: ${({ show }) => show ? 'flex !important' : 'none' };
    width: 100%;
    height: 28px;
    background: ${({ theme }) => theme.colors.search_background };
    border-radius: 25px;
    padding: 5px 5px 5px 15px;

    & > span {
        padding: 0 8px;
        color: ${({ theme }) => theme.colors.third_text_color };
        font-weight: 100;
    }

    & > span:hover {
        cursor: pointer;
    }

    & > input {
        width: 100%;
        border: none;
        background: ${({ theme }) => theme.colors.search_background };
    }

    & > input:focus {
        outline: none;
    }
`

export const FilterListItems = styled.div`
    padding-top: 10px;
    width: 100%;
`
export const FilterListItem = styled.div`
    padding: 2px 0;

    span:nth-child(2) {
        padding-left: 10px;
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.secondary_text_color };
    }

    span:last-child {
        font-size: 12px;
        padding-left: 5px;
        color: ${({ theme }) => theme.colors.third_text_color };
    }
`

export const FilterMoreItems = styled.div`
    width: 100%;
    margin-left: 40px;
    padding-top: 3px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.pink_text_color };
`