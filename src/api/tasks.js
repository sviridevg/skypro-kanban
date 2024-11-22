export const apiUrl = "https://wedev-api.sky.pro/api/kanban";

export const fetchTasks = async (token) => {
  if (!token) throw new Error("Необходимо авторизоваться!");

  // Запрос к API получения списка карточек
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

export const getCardForID = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Не удалось получить данные с сервера! status: ${response.status}`
    );
  }

  return await response.json();
};

export const deleteCardForID = async (id) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось удалить карточку, попробуйте позже");
  }
  return response.json();
};
