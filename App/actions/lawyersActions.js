export const LOAD_LAWYERS_SUCCESS = 'LOAD_LAWYERS_SUCCESS';
export const LOAD_LAWYERS_ERROR = 'LOAD_LAWYERS_ERROR';


export function loadLowyarsList(lawyers) {
  return {
    type: LOAD_LAWYERS_SUCCESS, 
    payload: lawyers.data.list
  };
};

export function errorLoadingLowyarsList(lawyers) {
  return {
    type: LOAD_LAWYERS_ERROR, 
    payload: lawyers.error
  };
}