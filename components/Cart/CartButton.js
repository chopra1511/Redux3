import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store/showCart';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const q = useSelector((state) => state.work.totalQuantity)
  const toggleHandler = () => {
    dispatch(cartAction.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{q}</span>
    </button>
  );
};

export default CartButton;
