import styled from "styled-components";

export const StyledSortDropdown = styled.div`
    position: relative;
    line-height: 30px;
    padding-left: 10px;
    width: 250px;
    height: 35px;
    border: 1px solid ${({theme}) => theme.colors.seperator_color };
    border-radius: 2px;

    & > span:first-child {
        font-size: 13px;
        color: ${({theme}) => theme.colors.secondary_text_color };
    }

    & > span:nth-child(2) {
        font-size: 13px;
        font-weight: 600;
    }
`

export const DropdownIcon = styled.img`
    position: absolute;
    right: 10px;
    height: 20px;
    top: 5px;
`

interface SortExtendedListProps {
    show: boolean;
}

export const SortExtendedList = styled.div<SortExtendedListProps>`
    display: ${({ show }) => show ? 'block': 'none' };
    position: absolute;
    left: -1px;
    right: -1px;
    background: white;
    padding: 10px 0;
    border-left: 1px solid ${({theme}) => theme.colors.seperator_color };
    border-right: 1px solid ${({theme}) => theme.colors.seperator_color };
    border-bottom: 1px solid ${({theme}) => theme.colors.seperator_color };
    font-size: 14px;
    color: ${({theme}) => theme.colors.secondary_text_color };
    z-index: 100;

    & > div {
        padding: 0 20px;
    }

    & > div:hover {
        cursor: pointer;
        background: ${({theme}) => theme.colors.search_background };
    }
`
interface ListItemProps {
    isSelected: boolean;
}

export const ListItem = styled.div<ListItemProps>`
    background: ${({ isSelected, theme }) => isSelected ? theme.colors.search_background : '#fff' };
`