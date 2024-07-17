
const signUpUrl = "https://wedev-api.sky.pro/api/user";
const url = "https://wedev-api.sky.pro/api/user";

export const getUsers = async ({ formData }) => {
  const response = await fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const checkUsers = data.users.filter((user) => {
        return user.login === formData.login;
      })[0];

      return checkUsers;
    })
    .then((checkUsers) => {
      if (checkUsers) {
        throw new Error();
      }
    })
    .catch((error) => {
      alert("Не удалось зарегистрироваться");
    });
};

export const signUp = async ({ name, login, password }) => {
  const response = await fetch(signUpUrl, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует");
  }
  if (!response.ok) {
    throw new Error(`Не верные данные пользователя!`);
  }
  const data = await response.json();
  return data;
};
