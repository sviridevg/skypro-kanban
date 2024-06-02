import { Column } from "../Column/index.jsx";

export const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без заголовка" />
            <Column title="Нужно сделать" />
            <Column title="В работе" />
            <Column title="Тестирование" />
            <Column title="Готово" />
          </div>
        </div>
      </div>
    </main>
  );
};
