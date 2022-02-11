import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from "react";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from "./store/Actions";

let isInitial = true;

function App() {

 const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.showCart);
   const cart = useSelector((state) => state.work);
    const notification = useSelector((state) => state.cart.notification);

     useEffect(() => {
       dispatch(fetchCartData());
     }, [dispatch]);

     useEffect(() => {
       if (isInitial) {
         isInitial = false;
         return;
       }

       if (cart.changed) {
         dispatch(sendCartData(cart));
       }
     }, [cart, dispatch]);


  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
  };

export default App;
