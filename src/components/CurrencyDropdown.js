import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {
    const { dispatch, currency } = useContext(AppContext);

    const submitEvent = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value.slice(0, 1)
        });
    };

    const chooseCurrencyName = () => {
        switch (currency) {
            case '$': 
                return '$ Dollar';
            case '£': 
                return '£ Pound';
            case '€': 
                return '€ Euro';
            case '₹': 
                return '₹ Ruppee';
            default:
                break;
        }
    };

  return (
    <Dropdown onChange={(event) => submitEvent(event.target.value)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Currency ({chooseCurrencyName()})
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={event => submitEvent(event.target.text)}>$ Dollar</Dropdown.Item>
        <Dropdown.Item onClick={event => submitEvent(event.target.text)}>£ Pound</Dropdown.Item>
        <Dropdown.Item onClick={event => submitEvent(event.target.text)}>€ Euro</Dropdown.Item>
        <Dropdown.Item onClick={event => submitEvent(event.target.text)}>₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropdown;
