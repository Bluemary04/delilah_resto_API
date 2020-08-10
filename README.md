# delilah_resto_API
---
Online delivery system for a restaurant. With this API you will be able to create, read, update and delete  users, products and orders. Except for the create users and users/login route, token auth is required. There is admin authentication to restrict some operations to admin only.

## Stack used
---
* Node.js
* Express.js
* JWT
* Mysql
* Xampp
* Swagger UI
* Postman

## Local server setup

1)First, download and install Xampp v.3.2.4. The software packet contains the web server Apache and the relational database management system MySQL used in this proyect.
[Here you have a tutorial to install it in case you need it] (https://www.youtube.com/watch?v=-f8N4FEQWyY)

In this case, I only used the Apache and MySQL modules. 

2)Open phpMyAdmin: You can use the Admin button of your database module to open phpMyAdmin. Here, you can manage the database of the project. Alternatively, you can reach the administration section of your MySQL database via localhost/phpmyadmin/. 

3)Open the project and intall all dependencies specified in the package.json file. 



## Error response format
---
```
{
   "status": 401
   "message": "Invalid token"
}
```
 
 ## API Enpoints
 ---
[Swagger UI](https://app.swaggerhub.com/apis/blueMary/DelilahRastaurant/1.0.0)

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/58e1436b6a3fd94b50a1)






