// import { Form } from "react-router-dom";
import { Wrapper, Input, Icon, Button } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper>
      <Icon />
      <form onSubmit={onSubmit}>
      <Input
        type="text"
        value={value}
        onChange={onChange}
       />
      <Button type="submit"></Button>
      </form>
    </Wrapper>
  );
};