export const TOGGLE_CARD = 'TOGGLE_CARD'
export const SHOW_LAWYER_NAME = 'SHOW_LAWYER_NAME'
export const HIDE_LAWYER_NAME = 'HIDE_LAWYER_NAME'
export const SAVE_LAWYER_CARD = 'SAVE_LAWYER_CARD'

export const toggleCard = () => ({
  type: TOGGLE_CARD
 });

export const showLawyerName = () => ({
  type: SHOW_LAWYER_NAME
 });

export const hideLawyerName = () => ({
  type: HIDE_LAWYER_NAME
 });

export const saveLawyerCard = (index) => ({
  type: SAVE_LAWYER_CARD,
  payload: index
 });

 
 