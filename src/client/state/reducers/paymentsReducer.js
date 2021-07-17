import { createReducer, createAction } from '@reduxjs/toolkit';

export const createPaymentsList = createAction('CREATE_PAYMENTS');
// export const addPayment = createAction('ADD_PAYMENTS');
// export const removePayment = createAction('REMOVE_PAYMENT');
export const changeSelectedPayment = createAction('CHANGE_SELECTEDPAYMENT');

// logIn will only store the UserId in state!

let initialState = {
  paymentsList: [],
  selectedPaymentIndex: 0
};

export const paymentsReducer = createReducer (initialState, (builder) => {
  builder
    .addCase(createPaymentsList, (state, action) => {
      state.paymentsList = action.payload;
      // action.payload will be an array of the payments
    })
    .addCase(changeSelectedPayment, (state, action) => {
      state.paymentsList[state.selectedPaymentIndex].selected = false;
      for (var i = 0; i < state.paymentsList.length; i++) {
        if (state.paymentsList[i].id === action.payload) {
          state.paymentsList[i].selected = true;
          state.selectedPaymentIndex = i;
        }
      }
    })
})

// .addCase(addPayment, (state, action) => {
    //   state.paymentsList = [...state.paymentsList, action.payload]
    //   // action.payload will be a specific object of a payment
    // })
    // .addCase(removePayment, (state, action) => {
    //   state.paymentsList = state.paymentsList.filter(payment => (
    //     payment.id !== action.payload
    //     // action.payload should be the id of the payment that you are attempting to remove
    //   ))
    // })