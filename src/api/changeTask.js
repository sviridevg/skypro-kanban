const apiUrl = "https://wedev-api.sky.pro/api/kanban";

// Запрос к API создания новой карточки
export const changeTask = async (carsdData, id) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { title, topic, status, description, date } = carsdData;
  console.log(status);

  const response = await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
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
