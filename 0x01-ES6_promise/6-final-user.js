import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const statusArr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((prom) => {
      prom.forEach((result) => {
        if (result.status === 'fulfilled') {
          statusArr.push(result);
        } else {
          const resMessage = result.reason.message;

          Object.assign(result, { value: `Error: ${resMessage}` });
          // eslint-disable-next-line no-param-reassign
          delete result.reason;
          statusArr.push(result);
        }
      });

      console.log(statusArr);
      return statusArr;
    });
}
