# Development

### Link to Deployed Website
 https://sleepysloth1.github.io/Development/

### Goal and Value of the Application
The goal of the application is to be able to sort, filter, and add/remove beverages to the cart, and update the carts subtotal according to the price of the beverage. I created two filters: 1)for the All vs. nutrition(calorie) of each drink and 2) All vs. drinks below $7.00. The sorting feature allows you to sort from low to high price.

### Usability Principles Considered
I used a clear hierarchy where in that each drink is clearly associated with a corresponding price, calorie, add to cart and remove from cart button. Also, I gave the sorting and filtering panel radio buttons that clearly indicate what is applied in the current moment. Each card of the Beverage indicates all the information regarding its properties including nutrtion, price, name, and a button to add and remove(which is only shown once you add to cart, and shown on a correspong beverage card) the item from the cart and the carts subtotal will update accordingly

When you add to cart, the price of the cart clearly increments by the cost of the beverage. In order to remove the item from the cart, scroll to the corresponding duplicate beverage (usually at the bottom of the screen, or side by side, depending on your computer display width) and click the button remove from cart.

### Organization of Components
I have a body, filter, header, item, itemList, cart, and cartItem component.

Body: contains the data upon which the sorting and filtering will use. it also has the algorithms for the filters and sorting. Additionally, it creates states and has an add to cart and remove from cart function.

Filter: Responsible for the correct implementation of the filter and its radio button controls

Header: Creates the header of the site with the Ceremony tea logo

Item: Responsible for creating the different aspects of each Beverage including its nurtrion, price, label, photo, and its buttons.

Itemlist: map of the many different aspects of each beverage.

Cart: map of the many different aspects of each beverage in the cart.

CartItem: Similar to item.js, its responsible for creating the different aspects of each Beverage including its nurtrion, price, label, photo, and its buttons. Additinoally, it has the remove from cart button.


Images for the beverages were found on Ceremony's ordering platform: https://www.toasttab.com/ceremony/v3


### How Data is Passed Down Through Components
The beverage data is created in the body.js file. Then the data is passed through props. For example, 
the data created in the body.js and then passed through to the filter.js file so that the filter can filter
based off the data passed through to the function. 


### How the User Triggers State Changes
All the components interact. When a person clicks on one of the filters/sorting radio buttons, the trigger state changes, the computer has to remember what it filtered and whether or not it needs to remember and store that information.
Also, when a user adds a beverage to the cart, the trigger state changes again, because the total price of the cart is always being updated. Additionally, when a user sorts by price and filters one after another, the trigger state changes yet again.


