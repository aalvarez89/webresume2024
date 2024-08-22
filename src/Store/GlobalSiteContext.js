/**
 * @module GlobalSiteContext
 * 
 * @author Andrew Alvarez
 * @copyright Copyright (c) 2024 Andrew Alvarez
 * @license MIT
 * 
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * 
 * Date: 2024-08-21
 */

import { createContext, useReducer } from 'react';

export const GlobalSiteContext = createContext({});

export const initialState = {
    openTitle: true,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case siteActionTypes.SET_OPENTITLE:
            return {
                ...state,
                openTitle: action.payload
            };

        default: {
            return state;
        }
    };
};

export const siteActionTypes = {
    SET_OPENTITLE: 'SET_OPENTITLE',
};


export const useGlobalSiteState = () => {
    const [globalSiteState, globalSiteDispatch] = useReducer(reducer, initialState);

    return { globalSiteState, globalSiteDispatch };
};
