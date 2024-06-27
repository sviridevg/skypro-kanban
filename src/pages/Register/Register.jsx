import { Link } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./Register.styled";

export const RegisterPage = () => {
  return (
    <S.RegisterWrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlok>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin id="formLogUp" action="#">
              <S.ModalInput
                className="first-name"
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Имя"
              />
              <S.ModalInput
                className="login"
                type="text"
                name="login"
                id="loginReg"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                className="password-first"
                type="password"
                name="password"
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalBtnEnter id="SignUpEnter">
                <Link to={routes.main}>Зарегистрироваться</Link>
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
