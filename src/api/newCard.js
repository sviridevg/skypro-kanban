const apiUrl = "https://wedev-api.sky.pro/api/kanban";

// Запрос к API создания новой карточки
export const addTask = async (carsdData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { title, topic, status, description, date } = carsdData;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify({ title, topic, status, description, date }),
  });

  if (!response.ok) {
    throw new Error("Не удалось добавить задачу, попробуйте позже");
  }
  return response.json();
};
