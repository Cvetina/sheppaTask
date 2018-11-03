import { initialState } from './initialState'
import { LOAD_LAWYERS_SUCCESS, LOAD_LAWYERS_ERROR, CHOOSE_LAWYER, RESET_LAWYER } from '../actions/lawyersActions'

export default function addFavouritesReducer (state = initialState.lawyers, action) {
  switch(action.type) {
    case LOAD_LAWYERS_SUCCESS:
    return {
      ...state,
      lawyers: action.payload,
      completed: true
    }
    case LOAD_LAWYERS_ERROR:
    return {
      ...state,
      lawyers: action.payload,
      completed: false
    }
    case CHOOSE_LAWYER:
    return {
      ...state,
      choosenLawyer: action.payload
    }
    case RESET_LAWYER:
    return {
      ...state,
      choosenLawyer: null
    }
  }
    return state;
}
