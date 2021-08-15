pragma solidity ^0.5.0;

contract Marketplace {
  string public name;
  uint public productCount = 0;
  mapping(uint => Product) public products;

  struct Product {
    uint id;
    string name;
    uint price;
    address owner;
    bool purchased;
  }

  constructor() public {
    name = "Satyam Dua Marketplace";
  }

  // function createProduct() {
  //   // Make sure the parameters are correct
  //   // Create the product
  //   // Trigger an event
  // }
}