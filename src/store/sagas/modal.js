import {
  call,
  delay,
  put,
  takeLeading,
} from 'redux-saga/effects';
import {
  HIDE_MODAL,
  setCancelText,
  setModalIsVisible,
  setOnCancelPress,
  showModal,
} from '../actions/modal';

export function* closeModal() {
  yield put(showModal({ showModal: false }));
}

export function* showModalError(modalTitle, modalDescription, textButton = 'Ok', onPressConfirm = () => null) {
  yield call(closeModal);

  const modalPayload = {
    showModal: true,
    modalTitle,
    modalDescription,
    textButton,
    onPressConfirm,
  };
  yield put(showModal(modalPayload));
}

export function* showModalSuccess(modalTitle, modalDescription, textButton = 'Ok', onPressConfirm = () => null) {
  yield call(closeModal);

  const modalPayload = {
    showModal: true,
    modalTitle,
    modalDescription,
    textButton,
    onPressConfirm,
  };
  yield put(showModal(modalPayload));
}

export function* showConfirmationModal(
  modalTitle,
  modalDescription,
  confirmText,
  confirmCallback,
  cancelText,
  cancelCallback,
) {
  yield call(closeModal);
  if (cancelText) {
    yield put(setCancelText(cancelText));
  }
  if (cancelCallback) {
    yield put(setOnCancelPress(cancelCallback));
  }

  const modalPayload = {
    showModal: true,
    modalTitle,
    modalDescription,
    textButton: confirmText,
    onPressConfirm: confirmCallback,
  };
  yield put(showModal(modalPayload));
}

function* hideModal() {
  yield put(setModalIsVisible(false));
  yield delay(200);
  yield put(showModal({ showModal: false }));
}

function* modalSagas() {
  yield takeLeading(HIDE_MODAL, hideModal);
}

export default modalSagas;
