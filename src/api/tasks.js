export const apiUrl = "https://wedev-api.sky.pro/api/kanban";

export const fetchTasks = async (token) => {
  if (!token) {
    throw new Error("Необходимо авторизоваться!");
  }
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Не удалось получить данные с сервера! status: ${response.status}`
    );
  }

  const data = await response.json();
  return data;
};
