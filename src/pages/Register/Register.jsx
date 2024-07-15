import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./Register.styled";
import { useState } from "react";
import { getUsers, signUp } from "../../api/register";
import { Error } from "../../globalStyle.stiled";

export const RegisterPage = () => {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.login || !formData.password) {
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме"
      );
      return;
    }

    getUsers({ formData }).finally(() => {
      signUp(formData)
        .then((res) => {
          alert(
            `${res.user.name} регистрация прошла успешно, войдите для продолжения работы`
          );
          navigation(routes.login);
        })
        .catch((error) => {
          setError(error.message);
        });
    });
  };

  return (
    <S.RegisterWrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlok>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin onSubmit={handleSignUp} id="formLogUp" action="#">
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />

              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, login: e.target.value })
                }
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Логин"
              />
              <S.ModalInput
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />

              {error && <Error>{error}</Error>}
              <S.ModalBtnEnter onClick={handleSignUp} id="SignUpEnter">
                Зарегистрироваться
              </S.ModalBtnEnter>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to={routes.login}>Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlok>
        </S.Modal>
      </S.ContainerSignin>
    </S.RegisterWrapper>
  );
};
