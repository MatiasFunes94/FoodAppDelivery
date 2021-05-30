export const SHOW_MODAL = 'SHOW_MODAL';
export const SET_CONFIRM_TEXT = 'SET_CONFIRM_TEXT';
export const SET_CANCEL_TEXT = 'SET_CANCEL_TEXT';
export const SET_ON_CONFIRM_ONPRESS = 'SET_ON_CONFIRM_ONPRESS';
export const SET_CANCEL_ONPRESS = 'SET_CANCEL_ONPRESS';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SET_MODAL_IS_VISIBLE = 'SET_MODAL_IS_VISIBLE';

export const showModal = (payload) => ({
  type: SHOW_MODAL,
  payload,
});

export const setCancelText = (payload) => ({
  type: SET_CANCEL_TEXT,
  payload,
});

export const setOnCancelPress = (payload) => ({
  type: SET_CANCEL_ONPRESS,
  payload,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const setModalIsVisible = (isVisible) => ({
  type: SET_MODAL_IS_VISIBLE,
  payload: isVisible,
});
