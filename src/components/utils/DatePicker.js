import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const renderDatePicker = ({input, placeholder, defaultValue, meta: {touched, error} }) => (
    <div>
          <DatePicker {...input} dateForm="MM/DD/YYYY" selected={input.value} />
          {touched && error && <span>{error}</span>}
    </div>
  );
  
  export default renderDatePicker