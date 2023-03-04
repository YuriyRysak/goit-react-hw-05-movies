import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  /* z-index: 1100; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  ${'' /* padding-right: 24px;
  padding-left: 24px; */}
  padding-top: 12px;
  ${'' /* padding-bottom: 12px; */}
  color: #000;
  background-color: inherit;
  
 
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
     box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Icon = styled(HiSearch)`
  width: 30px;
  height: 30px;
  position: center;
  color:#cb6843;
  ${'' /* right: 6px; */}

  ::placeholder {
  font: inherit;
  font-size: 18px;
}
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('../img/search.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
   

  :hover {
    opacity: 1;
  }
`;


/*
 * Стили компонента Searchbar
 */
// .Searchbar {
  
// }

/*
   * Стили компонента SearchForm
   */
// .SearchForm {
//   display: flex;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   background-color: #fff;
//   border-radius: 3px;
//   overflow: hidden;
// }

// .SearchForm-button {

// }



// .SearchForm-button-label {
//   position: absolute;
//   width: 1px;
//   height: 1px;
//   padding: 0;
//   overflow: hidden;
//   clip: rect(0, 0, 0, 0);
//   white-space: nowrap;
//   clip-path: inset(50%);
//   border: 0;
// }


