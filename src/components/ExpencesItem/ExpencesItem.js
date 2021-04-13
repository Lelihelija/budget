import React, {useState, useEffect} from 'react';

export default function ExpencesItem(props) {
  let [editOn, setEditOn] = useState(false);
  let [tempAmount, setTempAmount] = useState(props.data.amount);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

    const onChange = (e) => {
      setTempAmount(e.currentTarget.value);
      console.log('tempAmount first: ', tempAmount);
  };

  let data = props.data;

  let editItem = () => {
    console.log('edit: ');
    setEditOn(true);
    // setEditOn
    // return props.changeListener(amount);
  }

  let confirmEdit = () => {
    console.log('tempAmount: ', tempAmount);
    setEditOn(false);
  };

  let cancelEdit = () => {
    setEditOn(false);
  };

  let deleteItem = id => {
    console.log('delete: ', id);
    return props.deleteListener(id);
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
              <button type="button" className="confirm-edit-btn" onClick={confirmEdit}></button>
              <button type="button" className="exit-edit-btn" onClick={cancelEdit}></button>
            </div>
          </div>
          <div className="expencesItem__item"><button className="my-button-default my-button-small" onClick={() => {deleteItem(data.id)}}>Delete</button></div>
        </>
      :
        <>
          <div className="expencesItem__item"><span>{data.title}</span></div>
          <div className="expencesItem__item">{data.amount}$</div>
          <div className="expencesItem__item"><button className="my-button-default my-button-small" onClick={() => {editItem()}}>Edit</button></div>
          <div className="expencesItem__item"><button className="my-button-default my-button-small" onClick={() => {deleteItem(data.id)}}>Delete</button></div>
        </>
  )
};
