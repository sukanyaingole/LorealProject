import { Component } from '@angular/core';


@Component({
  selector:'my-app',
  template: `<h3>****************************************************************************</h3>
    <h1>{{title}}</h1> 
    <h3>****************************************************************************</h3>
    <h3>Product ID: {{product.id}}</h3>
    <h3>Name: {{product.name}}</h3>
    <h3>Description: {{product.description}}</h3>
    <h3>Price: {{product.price}}</h3> 
    <h3>****************************************************************************</h3> 
    <h1>Customer: {{customer1.name}}</h1>
    <h3>****************************************************************************</h3>
    <h3>Customer ID: {{customer1.id}}</h3>
    <h3>City: {{customer1.city}}</h3>
    <h3>Quantity: {{customer1.quantity}}</h3>
    <h3>Total Price: {{total_price}}</h3>
    <h3>****************************************************************************</h3>
    <h1>Customer: {{customer2.name}}</h1>
    <h3>****************************************************************************</h3>
    <h3>Customer ID: {{customer2.id}}</h3>
    <h3>City: {{customer2.city}}</h3>
    <h3>Quantity: {{customer2.quantity}}</h3>
    <h3>Total Price: {{product.price * customer2.quantity}}</h3>
    <h3>****************************************************************************</h3>`
})

export class FirstComponent{
  title = "Product Details";
  product = {
    'id':1001,
    'name':"Moto G5",
    'description':"5.5 Screen for MotoG5",
    'price':5000
  };
  

  customer1 = {
    'id':2001,
    'name':"Gopal Enterprises",
    'city':"Pune",
    'quantity':5
  };

  total_price= ((this.product.price )*(this.customer1.quantity));

  customer2 = {
    'id':2002,
    'name':"Kumar Enterprises",
    'city':"Mumbai",
    'quantity':15
  };
  
}
