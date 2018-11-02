export const TOGGLE_ACTIVE_MENU = 'TOGGLE_ACTIVE_MENU'
export const HIDE_ACTIVE_MENU = 'HIDE_ACTIVE_MENU'
export const SHOW_ACTIVE_SINGLE_PRODUCT_MODAL = 'SHOW_ACTIVE_SINGLE_PRODUCT_MODAL'
export const HIDE_ACTIVE_SINGLE_PRODUCT_MODAL = 'HIDE_ACTIVE_SINGLE_PRODUCT_MODAL'

export const hideMenu = () => ({
  type: HIDE_ACTIVE_MENU
 });

export const toggleMenu = () => ({
  type: TOGGLE_ACTIVE_MENU
 });

 export const showSingleProductModal = (item) => ({
   type: SHOW_ACTIVE_SINGLE_PRODUCT_MODAL,
   item: item
  });
 
 export const hideSingleProductModal = () => ({
   type: HIDE_ACTIVE_SINGLE_PRODUCT_MODAL,
   item: null
  });
 
 
 