import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'

function Shop() {
  const balance=useSelector(state=>state.amount);
  const dispatch=useDispatch();
  const {withdrawMoney, depositMoney}=bindActionCreators(actionCreators, dispatch);
  return (
    <div className='container my-5'>
      <h2>Buy Some Shoes at Rs:50</h2>
      {/* Without using bindActionCreators */}
      {/* <button className="btn-primary m-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Add to Cart
      <button className="btn-primary m-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      <button className="btn-primary m-2" onClick={()=>{withdrawMoney(100)}}>-</button>
      Add to Cart({balance})
      <button className="btn-primary m-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop;