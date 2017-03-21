import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import { UPLOAD_PICTURE } from '../constants/filestack';
import { uploadPictureSuccess, uploadPictureFailture } from '../action/filestack';

const pick = () => {
  return new Promise(function(resolve, reject) {
    filepicker.pick(
    {
      mimetype: 'image/*',
      container: 'modal',
      services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'URL', 'IMGUR', 'PICASA'],
      openTo: 'COMPUTER'
    },

    function (Blob){
      console.log(JSON.stringify(Blob));
      const handler = Blob.url;
      resolve(handler);
    },

    function (FPError) {
      console.log(FPError.toString());
      reject(FPError.toString());
    });
  });
}

function* uploadPicture() {
  try {
    const ulr = yield call(pick);
    yield put(uploadPictureSuccess(url));
  } catch (err) {
    yield put(uploadPictureFailture());
  }
}

export function* watchUploadPicture(){
  yield takeLatest(UPLOAD_PICTURE, uploadPicture);
}
