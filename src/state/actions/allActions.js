import { setCurrentUser, logIn, logOut } from '../reducers/currentUserReducer';
import { addName, setNumber } from '../reducers/namesReducer';

import { addItem, subtractItem, UpdateItemPrice, UpdateItemDescription, resetItemQuantity } from '../reducers/menuItemReducer';
import { UpdateItemName, UpdateItemId, UpdateItemQuantity, UpdateTotalPrice, UpdateRestaurantId, setUserId, setGroupId } from '../reducers/orderItemReducer';
import { addItemToOrders, addToPriceTotal, resetAllOrders } from '../reducers/allOrderItemsReducer';
import { updateCurrentRestaurantId, updateCurrentRestaurantName } from '../reducers/restaurantReducer';
import { addFriendName } from '../reducers/friendReducer'
import { updateCurrentGroup } from '../reducers/groupReducer';
import { createPaymentsList, purgePaymentsList, changeSelectedPayment, addPayment} from '../reducers/paymentsReducer';
import { addEmail, removeEmail, resetEmails } from '../reducers/emailFriendsReducer';

const allActions = {
  addName,
  setCurrentUser,
  logIn,
  logOut,
  addItem,
  addToPriceTotal,
  addItemToOrders,
  UpdateItemPrice,
  UpdateItemDescription,
  resetItemQuantity,
  subtractItem,
  UpdateItemName,
  UpdateItemId,
  UpdateItemQuantity,
  UpdateTotalPrice,
  UpdateRestaurantId,
  updateCurrentRestaurantName,
  updateCurrentRestaurantId,
  resetAllOrders,
  addFriendName,
  setUserId,
  updateCurrentGroup,
  setGroupId,
  createPaymentsList,
  purgePaymentsList,
  changeSelectedPayment,
  addPayment,
  addEmail,
  removeEmail,
  resetEmails
}

export default allActions;