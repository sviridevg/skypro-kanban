import { useState } from "react";
import * as S from "./header.styled.js";
import { Container } from "../../globalStyle.stiled.js";
import { Link } from "react-router-dom";
import { routes } from "../../router/routes.js";

import { useUser } from "../../context/User/useUser.js";

export const Header = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const toggleModalUser = () => {
    setIsOpen(!isOpen);
  };

  // Переключение темы с сохранением в localStorage
  const onTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo className={`${theme === "light" ? "_light" : "_dark"}`}>
            <Link to={routes.main} target="_self">
              <img src="/logo.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderLogo className={`${theme === "light" ? "_dark" : "_light"}`}>
            <Link to={routes.main} target="_self">
              <img src="/logo_dark.png" alt="logo" />
            </Link>
          </S.HeaderLogo>
          <S.HeaderNav>
            <Link to={routes.newCard} target="_self">
              <S.HeaderBtnMainNew id="btnMainNew">
                Создать новую задачу
              </S.HeaderBtnMainNew>
            </Link>

            <S.HeaderUser onClick={toggleModalUser}>{user.name}</S.HeaderUser>
            {isOpen && (
              <S.PopUserSet>
                <S.HeaderPopUserSet id="user-set-target">
                  <S.PopUserSetName>{user.name}</S.PopUserSetName>
                  <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
                  <S.PopUserSetThem>
                    <p>Темная тема</p>
                    <input
                      defaultChecked={theme === "dark"}
                      onClick={onTheme}
                      type="checkbox"
                      name="checkbox"
                    />
                  </S.PopUserSetThem>
                  <button type="button">
                    <Link to={"/exit"}>Выйти</Link>
                  </button>
                </S.HeaderPopUserSet>
              </S.PopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};
