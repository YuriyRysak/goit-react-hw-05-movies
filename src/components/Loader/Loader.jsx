import { Loading } from './Loader.styled.js'
import { RotatingTriangles } from 'react-loader-spinner';


const Loader = () => {
  return (
    <Loading>
      <RotatingTriangles
        visible={true}
        height="180"
        width="180 "
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </Loading>
  );
};
export default Loader;
