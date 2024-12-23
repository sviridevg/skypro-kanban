import { Link } from "react-router-dom";
import * as S from "./popUser.styled";
import { routes } from "../../router/routes";

import { useUser } from "../../context/User/useUser";


export const PopUser = () => {
  const { logOut } = useUser();

  return (
    <S.PopExit id="popExit">
      <S.PopExitContainer>
        <S.PopExitblock>
          <S.PopExitTtl>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTtl>
          <S.PopExitForm id="formExit" action="#">
            <S.PopExitFormGroup>
              <S.PopExitButtonYes onClick={logOut} id="exitYes">
                Да, выйти
              </S.PopExitButtonYes>
              <S.PopExitButtonNo id="exitNo">
                <Link to={routes.main}>Нет, остаться</Link>
              </S.PopExitButtonNo>
            </S.PopExitFormGroup>
          </S.PopExitForm>
        </S.PopExitblock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};
