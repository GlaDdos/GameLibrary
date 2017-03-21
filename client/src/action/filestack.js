import { UPLOAD_PICTURE, UPLOAD_PICTURE_SUCCESS, UPLOAD_PICTURE_FAILTURE } from '../constants/filestack';

function uploadPicture(){
  return {
    type: UPLOAD_PICTURE
  };
}

function uploadPictureSuccess(url) {
  return {
    type: UPLOAD_PICTURE_SUCCESS,
    url
  };
}

function uploadPictureFailture(){
  return {
    type: UPLOAD_PICTURE_FAILTURE
  }
}

export {
  uploadPicture,
  uploadPictureSuccess,
  uploadPictureFailture
};
