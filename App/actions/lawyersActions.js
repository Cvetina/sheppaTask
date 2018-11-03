export const LOAD_LAWYERS_SUCCESS = 'LOAD_LAWYERS_SUCCESS';
export const LOAD_LAWYERS_ERROR = 'LOAD_LAWYERS_ERROR';
export const CHOOSE_LAWYER = 'CHOOSE_LAWYER';
export const RESET_LAWYER = 'RESET_LAWYER';


export function loadLowyarsList(lawyers) {
  return {
    type: LOAD_LAWYERS_SUCCESS, 
    payload: lawyers
  };
};

export function errorLoadingLowyarsList(lawyers) {
  return {
    type: LOAD_LAWYERS_ERROR, 
    payload: lawyers.error
  };
}

export function chooseLawyer(index) {
  return {
    type: CHOOSE_LAWYER, 
    payload: index
  };
}

export function resetLawyer(index) {
  return {
    type: RESET_LAWYER, 
    payload: index
  };
}