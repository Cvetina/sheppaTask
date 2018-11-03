import { TOGGLE_CARD, SHOW_LAWYER_NAME, HIDE_LAWYER_NAME, SAVE_LAWYER_CARD } from '../actions/uiActions'

import { initialState } from './initialState';

export default function uiReducer(state = initialState.ui, action) {  
  switch(action.type) {
    case TOGGLE_CARD:
    return {
      ...state,
      toggleCard: !state.toggleCard
    }
    case SHOW_LAWYER_NAME:
    return {
      ...state,
      showLawyerName: true
    }
    case HIDE_LAWYER_NAME:
    return {
      ...state,
      showLawyerName: false
    }
    case SAVE_LAWYER_CARD:
    return {
      ...state,
      savedLawyerCard: action.payload
    }
  }
  return state;
}