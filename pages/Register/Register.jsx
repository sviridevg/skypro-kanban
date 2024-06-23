import { Link } from "react-router-dom";
import { routes } from "../../router/routes";

export const RegisterPage = () => {
  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <input
                className="modal__input login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter">
                <Link to={routes.main}>Зарегистрироваться</Link>{" "}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
