import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { Link } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartDropdown = ({ cartItems, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Link to="/checkout">
      <CustomButton onClick={() => dispatch(toggleCartHidden())}>
        GO TO CHECKOUT
      </CustomButton>
    </Link>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default connect(mapStateToProps)(CartDropdown);
