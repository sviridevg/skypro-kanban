import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import * as S from "./Login.styled";

// eslint-disable-next-line react/prop-types
export const LoginPage = ({ setIsAuth }) => {
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigation(routes.main);
  };

  return (
    <S.LoginWrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlok>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            <S.ModalFormLogin id="formLogIn" action="#">
              <S.ModalInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
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
