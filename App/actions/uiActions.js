export const TOGGLE_CARD = 'TOGGLE_CARD'
export const TOGGLE_SUGGESTIONS = 'TOGGLE_SUGGESTIONS'
export const SAVE_LAWYER_CARD = 'SAVE_LAWYER_CARD'
export const SAVE_SUGGESTIONS = 'SAVE_SUGGESTIONS'
export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE'

export const toggleCard = () => ({
  type: TOGGLE_CARD
 });

export const toggleSuggestions = () => ({
  type: TOGGLE_SUGGESTIONS
 });

export const saveLawyerCard = (lawyer) => ({
  type: SAVE_LAWYER_CARD,
  payload: lawyer
 });

export const saveSuggestion = (suggestions) => ({
  type: SAVE_SUGGESTIONS,
  payload: suggestions
 });

export const showErrorMessage = (bool) => ({
  type: SHOW_ERROR_MESSAGE,
  payload: bool
 });

 
 