import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();

  return Promise.all([uploadPhotoPromise, createUserPromise]).then((results) => {
    console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
  });
}
