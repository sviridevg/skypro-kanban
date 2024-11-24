import styled from "styled-components";
import {
  BtnBg,
  BtnBor,
  Categories,
  Green,
  Hide,
  Hover01,
  Hover03,
  Orange,
  Purple,
  Status,
  Subttl,
} from "../../globalStyle.stiled";

export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  @media (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.PopExitblockBgColor};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid ${({ theme }) => theme.PopExitblockBorderColor};
  position: relative;

  @media (max-width: 660px) {
    border-radius: 0;
    height: 100%;
  }

  @media (max-width: 495px) {
    padding: 20px 16px 32px;
    height: 100%;
  }
`;
export const PopBrowseBlockMessage = styled.p`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #9e9e9e;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
  color: ${({ theme }) => theme.PopExitTtlH2};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
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

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 660px) {
    display: block;
  }
`;

export const FormBrowse = styled.div``;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    max-width: 100%;
  }

  ${FormBrowse}
`;

export const FormBrowseBlock = styled(FormBrowse)`
  display: flex;
  flex-direction: column;

  & label {
    ${Subttl}
  }
`;

export const PopNewCardCategories = styled.div`
  & p {
    margin-bottom: 14px;

    /* ${Subttl} */
  }

  ${Categories}
`;

export const Checkbox = styled.label`
  ${({ hide }) => hide && Hide}
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

export const CheckboxCat = styled.label`
  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"]:checked + span {
    opacity: 1;

    & div {
      background-color: ${({ theme }) => theme.grayBg};
      color: ${({ theme }) => theme.grayColor};
    }
  }
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  column-gap: 10px;
`;

export const PopNewCardP = styled.p`
  ${({ hide }) => hide && Hide}
  margin-bottom: 14px;

  ${Subttl}
`;

export const PopBrowseBtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  & button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    margin-right: 8px;

    @media (max-width: 495px) {
      width: 100%;
      height: 40px;
      margin-right: 0px;
    }
  }
`;

export const PopBrowseBtnEdit = styled(PopBrowseBtnBrowse)``;

export const BtnGroup = styled.div`
  @media (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }

  & button {
    margin-bottom: 10px;
  }

  @media (max-width: 495px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const BtnBrowseEdit = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBor}

  ${Hover03}
`;

export const BtnBrowseDelete = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBor}

  ${Hover03}
`;

export const BtnBrowseClose = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBg}

  ${Hover01}
`;

export const BtnEditEdit = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBg}

  ${Hover01}
`;

export const BtnEditEditbor = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBor}

  ${Hover03}
`;
export const BtnEditDelete = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBor}

  ${Hover03}
`;

export const BtnEditClose = styled.button`
  ${({ hide }) => hide && Hide}
  ${BtnBg}

  ${Hover01}
`;

export const FormBrowseArea = styled.textarea`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.body};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  color: ${({ theme }) => theme.cardsTextColor};

  @media (max-width: 495px) {
    max-width: 100%;
    height: auto;
  }

  & ::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.cardsTextColor};
    letter-spacing: -0.14px;
  }

  & ::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: ${({ theme }) => theme.cardsTextColor};
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseStatus = styled.div`
  ${Status}
`;

export const StatusP = styled.p`
  margin-bottom: 14px;

  ${Subttl}
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  column-gap: 12px;
`;

export const SuccessMessage = styled.p`
  color: #155724;
  opacity: 0.4;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-bottom: 7px;
  cursor: pointer;

  & p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;
