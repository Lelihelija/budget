import React, {useState, useEffect} from 'react';

export default function ExpencesItem({data, amountChange, expenceDelete}) {
  let [editOn, setEditOn] = useState(false);
  let [tempAmount, setTempAmount] = useState(data.amount);
  let id = data.id;

  const onChange = (e) => {
    setTempAmount(+e.target.value);
  };

  let confirmEdit = (id, tempAmount) => {
    setEditOn(false);
    amountChange(id, tempAmount);
  };

  let cancelEdit = () => {
    setEditOn(false);
  };

  let deleteItem = id => {
    console.log('delete: ', id);
    return expenceDelete(id);
  }

  return(
    editOn ?
        <>
          <div className="expencesItem__item"><span>{data.title}</span></div>
          <div className="expencesItem__item">
            <input type="number" className={tempAmount >= 0 ? 'expencesItem__input' : 'expencesItem__input-error'} min="0"
            value={tempAmount}
            onChange={onChange}/>
          </div>
          <div className="expencesItem__item">
            <div className="expencesItem__edit-btn-wrapper">
              <button type="button" className="confirm-edit-btn" onClick={() => confirmEdit(id, tempAmount)}></button>
              <button type="button" className="exit-edit-btn" onClick={() => cancelEdit()}></button>
            </div>
          </div>
          <div className="expencesItem__item"><button className="my-button-default my-button-small" onClick={() => {deleteItem(data.id)}}>Delete</button></div>
        </>
      :
        <>
          <div className="expencesItem__item"><span>{data.title}</span></div>
          <div className="expencesItem__item amount">{data.amount}$</div>
          <div className="expencesItem__item"><button className="my-button-default my-button-small" onClick={() => setEditOn(true)}>Edit</button></div>
          <div className="expencesItem__item"><button className="my-button-default my-button-small" onClick={() => {deleteItem(data.id)}}>Delete</button></div>
        </>
  )
};
