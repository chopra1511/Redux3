import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    id: "P1",
    title: "Product1",
    price: 10,
    description: "This is Product1",
  },
  {
    id: "P2",
    title: "Product2",
    price: 20,
    description: "This is Product2",
  },
];

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((p) => (<ProductItem
          key= {p.id}
          id = {p.id}
          title={p.title}
          price={p.price}
          description= {p.description}
        /> ))}
        
      </ul>
    </section>
  );
};

export default Products;
