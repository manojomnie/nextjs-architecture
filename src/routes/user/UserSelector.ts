import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "@reducers/rootReducer";

const getPending = (state: rootState) => state.user.pending;

const getError = (state: rootState) => state.user.error;

const userData = (state: rootState) => state.user.userData;

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getUserSelector = createSelector(userData, (userData) => userData);