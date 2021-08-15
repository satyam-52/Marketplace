import React, { useState } from "react";

export default function Main(props) {
  const [state, setState] = useState({
    productName: '',
    productPrice: ''
  })
  return (
    <div id="content">
      <h1>Add Product</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const name = state.productName
          const price = window.web3.utils.toWei(state.productPrice.toString(), 'Ether')
          props.createProduct(name, price);
        }}
      >
        <div className="form-group mr-sm-2">
          <input
            type="text"
            id="productName"
            className="form-control"
            placeholder="Product Name"
            onChange={e => setState({...state, productName: e.target.value})}
            required
          />
        </div>
        <div className="form-group mr-sm-2">
          <input
            type="text"
            id="productPrice"
            className="form-control"
            placeholder="Product Price"
            onChange={e => setState({...state, productPrice: e.target.value})}
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
          <tr>
            <th scope="row">1</th>
            <td>iPhone X</td>
            <td>1 ETH</td>
            <td>0x64B37715279698E5CBcD8B00F00A54D9d779F7d8</td>
            <td>
              <button className="buyButton">Buy</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
