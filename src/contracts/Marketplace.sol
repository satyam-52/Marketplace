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

  event ProductCreated(
    uint id,
    string name,
    uint price,
    address owner,
    bool purchased
  );

  constructor() public {
    name = "Satyam Dua Marketplace";
  }

  function createProduct(string memory _name, uint _price) public {
    // Require a name
    require(bytes(_name).length > 0);
    // Require a price
    require(_price > 0);
    // Make sure the parameters are correct
    // Create the product
    // Icrement product count
    productCount ++;
    products[productCount] = Product(productCount, _name, _price, msg.sender, false);
    // Trigger an event
    emit ProductCreated(productCount, _name, _price, msg.sender, false);
  }
}