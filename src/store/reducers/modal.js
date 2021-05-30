import {
  SHOW_MODAL,
  SET_CANCEL_TEXT,
  SET_CANCEL_ONPRESS,
  SET_MODAL_IS_VISIBLE,
} from '../actions/modal';

const initialState = {
  title: '',
  description: '',
  isVisible: false,
  onConfirmPress: () => null,
  onCancelPress: () => null,
  confirmText: 'Aceptar',
  cancelText: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      if (!action.payload.showModal) {
        return initialState;
      }
      return {
        ...state,
        title: action.payload.modalTitle,
        description: action.payload.modalDescription,
        isVisible: action.payload.showModal,
        confirmText: action.payload.textButton,
        onConfirmPress: action.payload.onPressConfirm,
      };
    }
    case SET_CANCEL_TEXT: {
      return { ...state, cancelText: action.payload };
    }
    case SET_CANCEL_ONPRESS: {
      return { ...state, onCancelPress: action.payload };
    }
    case SET_MODAL_IS_VISIBLE: {
      return {
        ...state,
        isVisible: action.payload,
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
