import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/actions';
import * as actions from '../redux/actionTypes';
import '../styles/Categories.css';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatusCheck = () => dispatch(checkStatus(actions.CHECK_STATUS));

  return (
    <div className="categories__container">
      <button type="button" onClick={handleStatusCheck}>Check Status</button>
      <div className="categories__state">{categories}</div>
    </div>
  );
}

export default Categories;
