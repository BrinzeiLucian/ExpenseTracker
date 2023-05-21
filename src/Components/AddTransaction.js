import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const AddTransaction = () => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      desc,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="add-transaction__container">
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Enter description..."
          ></input>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          ></input>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
