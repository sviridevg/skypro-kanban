import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./Login.styled";
import { useState } from "react";
import { signIn } from "../../api/user";

// eslint-disable-next-line react/prop-types
export const LoginPage = ({ setUser }) => {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({ login: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.login) {
      setError("Введите логин");
      return;
    }
    if (!formData.password) {
      setError("Введите пароль");
      return;
    }

    signIn(formData)
      .then((res) => {
        setUser(res.user);
        navigation(routes.main);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <S.LoginWrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlok>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleSubmit} id="formLogIn" action="#">
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, login: e.target.value })
                }
                type="text"
                name="login"
                id="formlogin"
                placeholder="Логин"
              />
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
              {error && <p>{error}</p>}
              <S.ModalBtnEnter
                onClick={handleSubmit}
                className="modal__btn-enter _hover01"
                id="btnEnter">
                Войти
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={routes.register}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlok>
        </S.Modal>
      </S.ContainerSignin>
    </S.LoginWrapper>
  );
};
