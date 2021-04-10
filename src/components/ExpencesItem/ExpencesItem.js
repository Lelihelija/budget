import React, {useState, useEffect} from 'react';

export default function ExpencesItem(props) {
  // let [editOn, setEditOn] = useState(false);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  let data = props.data;

  let editItem = () => {
    console.log('edit: ');
    // setEditOn
    // return props.changeListener(amount);
  }

  let confirmEdit = () => {};
  let cancelEdit = () => {};

  let deleteItem = id => {
    console.log('delete: ', id);
    return props.deleteListener(id);
  }

  return(
    <>
      <div className="main__info-item"><span>{data.title}</span></div>
      <div className="main__info-item">{data.amount}$</div>
      <div className="main__info-item"><button className="my-button-default my-button-small" onClick={() => {editItem()}}>Edit</button></div>
      <div className="main__info-item"><button className="my-button-default my-button-small" onClick={() => {deleteItem(data.id)}}>Delete</button></div>
    </>
  )
};
