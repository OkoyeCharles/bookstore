import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/actions';
import * as actions from '../redux/actionTypes';
import '../styles/Categories.css';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatusCheck = () => {
    dispatch(checkStatus(actions.CHECK_STATUS));
    alert(categories);
  };

  return (
    <div className="categories__container">
      <button type="button" onClick={handleStatusCheck}>Check Status</button>
    </div>
  );
}

export default Categories;
