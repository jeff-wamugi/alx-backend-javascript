import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.allSettled([uploadPhoto(), createUser()])
    .then((value) => {
      console.log(value[0].value.body, value[1].value.firstName, value[1].value.lastName);
    })
    .catch(() => console.log('Signup system offline'));
}
