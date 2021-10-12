import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterType } from '../../components/FilterSection';
import type { RootState } from "../../store/store";

export interface AppliedFilterItem {
    type: FilterType;
    id: number;
    name: string;
}

interface FiltersState {
    appliedFilters: AppliedFilterItem[]
}

const initialState: FiltersState = {
    appliedFilters: []
}

const filterReducer = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<AppliedFilterItem>) => {
            state.appliedFilters = [...state.appliedFilters, action.payload];
        },
        removeFilter: (state, action: PayloadAction<{ id: number, type: FilterType }>) => {
            const updatedFilter = state.appliedFilters.filter((item: AppliedFilterItem) => {
                if(item.type === action.payload.type) {
                    return item.id !== action.payload.id ;
                } else {
                    return true;
                }
            });
            state.appliedFilters = updatedFilter;
        }
    }
});

export const { addFilter, removeFilter } = filterReducer.actions;
export const selectAppliedFilters = (state: RootState): AppliedFilterItem[] => state.filters.appliedFilters;

export default filterReducer.reducer;