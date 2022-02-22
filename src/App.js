import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchCustomers } from "./asyncAction/customers";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReduser";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash);
  const customers = useSelector((state) => state.customerReducer.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customers = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customers));
  };

  const removeCustomers = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <div>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>добавити</button>
        <button onClick={() => getCash(Number(prompt()))}>відняти</button>
        <button onClick={() => addCustomer(prompt())}>добавити клієнта</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Отримувати клієнтів із бази
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div onClick={() => removeCustomers(customer)} key={customer.id}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>клієнти відсутні</div>
      )}
    </div>
  );
}

export default App;
