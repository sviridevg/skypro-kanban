import styled from "styled-components";
import {
  Categories,
  Green,
  Hover01,
  Orange,
  Purple,
  Subttl,
} from "../../globalStyle.stiled";

export const PopNewCard = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
`;
export const PopNewCardCategories = styled.div`
  & p {
    margin-bottom: 14px;

    /* ${Subttl} */
  }

  ${Categories}
`;

export const PopNewCardP = styled.p`
  margin-bottom: 14px;

  ${Subttl}
`;

export const PopNewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;

  & h3 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const PopNewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;

  & input {
    margin: 20px 0;
  }

  & textarea {
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
  }

  & input,
  textarea {
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin: 20px 0;

    & input::-moz-placeholder,
    textarea::-moz-placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1px;
      color: #94a6be;
      letter-spacing: -0.14px;
    }

    & input::placeholder,
    textarea::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 1px;
      color: #94a6be;
      letter-spacing: -0.14px;
    }
  }
`;

export const FormNewLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 10px;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }
`;

export const FormNewСreateBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;

  ${Hover01}
`;

export const Checkbox = styled.label`
  & input[type="radio"] {
    display: none;
  }

  & span {
    opacity: 0.5;
  }

  & input[type="radio"]:checked + span {
    opacity: 1;
  }
`;

export const Categori = styled.div`
  width: auto;
  height: 30px;
  padding: 8px 20px 8px 20px;
  border-radius: 18px;
  cursor: pointer;

  ${({ $categori }) => $categori === "Web Design" && Orange}
  ${({ $categori }) => $categori === "Copywriting" && Green}
  ${({ $categori }) => $categori === "Research" && Purple}



  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
  }
`;
