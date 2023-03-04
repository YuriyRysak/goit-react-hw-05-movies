// import { Form } from "react-router-dom";
import { Wrapper, Input, Button, SearchForm, Icon } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <Wrapper>
      
      <SearchForm onSubmit={onSubmit}>
      <Input
        type="text"
        autocomplete="off"
        autofocus="off"
        placeholder="Search movies..."
        value={value}
        onChange={onChange}
       />
       
      <Button type="submit"><Icon/></Button>
      </SearchForm>
    </Wrapper>
  );
};