import { useState } from "react";
import {
  addFilter,
  removeFilter,
  selectAppliedFilters,
  AppliedFilterItem
} from "../reducers/filter/filterSlice";

import {
  StyledFilter,
  FilterHeader,
  DefaultHeader,
  FilterSearchBar,
  FilterListItems,
  FilterListItem,
  FilterMoreItems,
} from "./styles/Filter.styled";

import { FilterItem } from '../datasource/interfaces/FilterItem';
import { FilterType } from './FilterSection';
import { useAppDispatch, useAppSelector } from "../store/hooks";

interface FilterProps {
  title: string;
  type: FilterType;
  searchPlaceHolder: string;
  filterItems: FilterItem[];
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

function Filter(props: FilterProps) {
  const { type } = props;
  const [showFilterSearchBar, setShowFilterSearchBar] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useAppDispatch();
  const appliedFilters = useAppSelector(selectAppliedFilters);

  const onClickSearch = () => {
    setShowFilterSearchBar(true);
  };

  const onClickClose = () => {
    setShowFilterSearchBar(false);
    setSearchText("");
  };

  const onChangeSearchText = (e: ChangeEvent) => {
    setSearchText(e.target.value);
  };

  const onSelectFilterItem = (e: ChangeEvent, id: number, name: string) => {
    if(e.target.checked) {
      dispatch(addFilter({id, name, type }));
    } else {
      dispatch(removeFilter({ id, type }));
    }
  }

  const getListOfItems = () => {
    const getElement = (id: number, name: string, count: number) => {
      let checked = false;
      appliedFilters.forEach((item: AppliedFilterItem) => {
        if(item.id === id && item.type === type) { checked = true }
      });
      return (
        <FilterListItem key={`${id}-${type}`}>
          <input type="checkbox" checked={checked} onChange={(e) => onSelectFilterItem(e, id, name)}/>
          <span>{name}</span>
          <span>({count})</span>
        </FilterListItem>
      );
    };
    if (searchText === "") {
      return props.filterItems.slice(0, 7).map((filterItem: FilterItem) => {
        return getElement(filterItem.id, filterItem.name, filterItem.count);
      });
    } else {
      return props.filterItems.map((filterItem: FilterItem) => {
        if (filterItem.name.toLowerCase().includes(searchText)) {
          return getElement(filterItem.id, filterItem.name, filterItem.count);
        }
        return "";
      });
    }
  };

  return (
    <StyledFilter>
      <FilterHeader>
        <DefaultHeader show={!showFilterSearchBar}>
          <div>{props.title}</div>
          <div onClick={onClickSearch}>
            <img src="./assets/search.png" alt="" />
          </div>
        </DefaultHeader>
        {
          showFilterSearchBar &&
            <FilterSearchBar show={showFilterSearchBar}>
              <input
                type="input"
                value={searchText}
                placeholder={props.searchPlaceHolder}
                onChange={onChangeSearchText}
                autoFocus
              />
              <span onClick={onClickClose} data-testid='exit'>X</span>
            </FilterSearchBar>
        }
      </FilterHeader>
      <FilterListItems>{getListOfItems()}</FilterListItems>
      {props.filterItems.length > 7 ? (
        <FilterMoreItems>+{props.filterItems.length - 8} more</FilterMoreItems>
      ) : (
        ""
      )}
    </StyledFilter>
  );
}

export default Filter;
