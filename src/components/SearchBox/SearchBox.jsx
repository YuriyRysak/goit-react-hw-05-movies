import { useState} from 'react';

import { Wrapper, Input, Button, SearchForm, Icon } from "./SearchBox.styled";

export const SearchBox = ( {onSubmit} ) => {
  const [query, setQuery] = useState('');

   const onChange = e => {
    setQuery(e.target.value);
  };
   
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query)
    setQuery('');
  };
 

  return (
    <>
    <Wrapper>
      <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={onChange}
       />
       
      <Button type="submit"><Icon/></Button>
      </SearchForm>
    </Wrapper>
    

   </>
  );
};