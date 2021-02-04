import UsersDatabase from '../database/users.json';

export function postLogin(email, pw) {
  return new Promise(result => {
    setTimeout(() => {
      const loginUser = UsersDatabase.users.find(user => {
        return user.email === email && user.password === pw;
      });

      result(loginUser);
    }, 1000);
  });
}