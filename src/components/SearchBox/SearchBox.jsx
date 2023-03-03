import { Form } from "react-router-dom";
import { Wrapper, Input, Icon } from "./SearchBox.styled.js";

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper>
      <Icon />
      <Form onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
      />
      </Form>
    </Wrapper>
  );
};
