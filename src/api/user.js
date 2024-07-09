const loginUrl = "https://wedev-api.sky.pro/api/user/login";

export const signIn = async ({ login, password }) => {
  const response = await fetch(loginUrl, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });
  if (!response.ok) {
    throw new Error(`Не верный логин или пароль!`);
  }
  return response.json();
};
