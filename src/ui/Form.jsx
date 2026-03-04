import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    (props.type === "regular" || props.type === undefined) &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: "regular",   // ← هنا بنقول: لو ما جاش prop اسمه type → اعتبره regular
};

export default Form;