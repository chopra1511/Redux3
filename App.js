import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from "react";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { cartAction } from './store/showCart';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {

 const dispatch = useDispatch();
  const show = useSelector((state) => state.cart.showCart);
   const cart = useSelector((state) => state.work);
    const notification = useSelector((state) => state.cart.notification);

     useEffect(() => {
       const sendCartData = async () => {
         dispatch(
           cartAction.showNotification({
             status: "pending",
             title: "Sending...",
             message: "Sending cart data!",
           })
         );
         const response = await fetch(
           "https://react-http-4be29-default-rtdb.firebaseio.com/cart.json",
           {
             method: "PUT",
             body: JSON.stringify(cart),
           }
         );

         if (!response.ok) {
           throw new Error("Sending cart data failed.");
         }

         dispatch(
           cartAction.showNotification({
             status: "success",
             title: "Success!",
             message: "Sent cart data successfully!",
           })
         );
       };

       if (isInitial) {
         isInitial = false;
         return;
       }

       sendCartData().catch((error) => {
         dispatch(
           cartAction.showNotification({
             status: "error",
             title: "Error!",
             message: "Sending cart data failed!",
           })
         );
       });
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
