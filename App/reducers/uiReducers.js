import { TOGGLE_CARD, SAVE_SUGGESTIONS, SAVE_LAWYER_CARD, TOGGLE_SUGGESTIONS } from '../actions/uiActions'

import { initialState } from './initialState';

export default function uiReducer(state = initialState.ui, action) {  
  switch(action.type) {
    case TOGGLE_CARD:
    return {
      ...state,
      toggleCard: !state.toggleCard
    }
    case TOGGLE_SUGGESTIONS:
    return {
      ...state,
      areSuggestionsVisible: !state.areSuggestionsVisible
    }
    case SAVE_SUGGESTIONS:
    return {
      ...state,
      suggestions: action.payload
    }
    case SAVE_LAWYER_CARD:
    return {
      ...state,
      savedLawyerCard: action.payload
    }
  }
  return state;
}