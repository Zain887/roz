import { SET_ACTIVE_CATEGORY } from './actions';

interface AppState {
    activeCategory: string | null;
}

const initialState: AppState = {
    activeCategory: null,
};

const appReducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
