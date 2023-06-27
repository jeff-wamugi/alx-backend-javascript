import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [body1, body2] = response;
      console.log(`${body1.firstName} ${body1.lastName}`);
      console.log(`${body2.firstName} ${body2.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
