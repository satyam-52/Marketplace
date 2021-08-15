import React, { useState } from "react";

export default function Main(props) {
  const [state, setState] = useState({
    productName: "",
    productPrice: "",
  });
  return (
    <div id="content">
      <h1>Add Product</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = state.productName;
          const price = window.web3.utils.toWei(
            state.productPrice.toString(),
            "Ether"
          );
          props.createProduct(name, price);
        }}
      >
        <div className="form-group mr-sm-2">
          <input
            type="text"
            id="productName"
            className="form-control"
            placeholder="Product Name"
            onChange={(e) =>
              setState({ ...state, productName: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group mr-sm-2">
          <input
            type="text"
            id="productPrice"
            className="form-control"
            placeholder="Product Price"
            onChange={(e) =>
              setState({ ...state, productPrice: e.target.value })
            }
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Add Product
        </button>
      </form>
      <p>&nbsp;</p>
      <h2>Buy Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Owner</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody id="productList">
          {props.products.map((product, key) => {
            return (
              <tr key={key}>
                <th scope="row">{product.id.toString()}</th>
                <td>{product.name}</td>
                <td>
                  {window.web3.utils.fromWei(product.price.toString(), "Ether")}{" "}
                  ETH
                </td>
                <td>{product.owner}</td>
                <td>
                  {!product.purchased ? (
                    <button
                      name={product.id}
                      value={product.price}
                      onClick={(event) => {
                        props.purchaseProduct(
                          event.target.name,
                          event.target.value
                        );
                      }}
                    >
                      Buy
                    </button>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
