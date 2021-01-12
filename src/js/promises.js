// import { success } from 'toastr'

const fetchUser = userName => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) {
        const user = { name: userName, age: 26, posts: 74 };
        resolve(user);
      }
      const error = 'ERROR!';
      reject(error);
    }, 1000);
  });
};

const onFetchUserSuccess = user => {
  console.log(user);
};

const onFetchUserError = error => {
  console.log('ERROR!');
};

fetchUser('mango').then(onFetchUserSuccess).catch(onFetchUserError);

// fetchUser('mango', onFetchUserSuccess, onFetchUserError);
