import PropTypes from 'prop-types';

const IndexedInput = ({ small, title, formDataArr, index, variable,handleChange }) => {
  const size = small ?  "w-full md:w-1/2 px-3 mb-6" : "w-full px-3" 
  return (
    <div className= {size}>
      <label
        className="block uppercase tracking-wide text-white text-xs font-bold mb-2 "
        htmlFor="grid-password"
      >
        {title}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500" />
        <textarea
          className=" font-bold appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pt-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          value={formDataArr[index][variable]}
          onChange={(e) =>
            handleChange(index, [variable], e.target.value)
          }
          required
        />
      </div>
    </div>
  );
};

IndexedInput.propTypes = {
  small: PropTypes.bool, // Boolean prop
  title: PropTypes.string.isRequired, // Required string prop
  formDataArr: PropTypes.array.isRequired, // Required object prop
  index: PropTypes.number.isRequired, // Required number prop
  variable: PropTypes.string.isRequired, // Required string prop
  handleChange: PropTypes.func.isRequired, // Required function prop
};
export default IndexedInput;
