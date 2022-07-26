import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  getDetails(): any[] {
    return [
      {
        "address":{
          "city": "Mangalore",
          "street": "new road",
          "number": 7682,
          "zipcode": "12926-3874"
        },
        "id": 1,
        "email": "anandn@gmail.com",
        "username": "anand",
        "password": "m38rmF$",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "anand",
          "lastname": "sharma"
        },
        "phone": "9967352244",
        
      },
      {
        "address": {
        
          "city": "Bangalore",
          "street": "Lovers Ln",
          "number": 7267,
          "zipcode": "12926-3874"
        },
        "id": 2,
        "email": "mahesh@gmail.com",
        "username": "mahesh_2314",
        "password": "83r5^_",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "mahesh",
          "lastname": "Krishna"
        },
        "phone": "9837363635",
       
      },
      {
        "address": {
       
          "city": "Chennai",
          "street": "Frances Ct",
          "number": 86,
          "zipcode": "29567-1452"
        },
        "id": 3,
        "email": "suraj@gmail.com",
        "username": "surajryan",
        "password": "kev02937@",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "suraj",
          "lastname": "varma"
        },
        "phone": "9388373635",
       
      },
      {
        "address": {
        
          "city": "Delhi",
          "street": "Hunters Creek Dr",
          "number": 6454,
          "zipcode": "98234-1734"
        },
        "id": 4,
        "email": "dhyan@gmail.com",
        "username": "dhyan",
        "password": "ewedon",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "dhyan",
          "lastname": "chand"
        },
        "phone": "8765334422",
       
      },
      {
        "address": {
   
          "city": "Mysore",
          "street": "adams St",
          "number": 245,
          "zipcode": "80796-1234"
        },
        "id": 5,
        "email": "anusha@gmail.com",
        "username": "anusha",
        "password": "jklg*_56",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "anusha",
          "lastname": "rao"
        },
        "phone": "7854323322",
       
      },
      {
        "address": {
  
          "city": "rajastan",
          "street": "prospect st",
          "number": 124,
          "zipcode": "12346-0456"
        },
        "id": 6,
        "email": "vihan@gmail.com",
        "username": "vihand_r",
        "password": "3478*#54",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "vihan",
          "lastname": "gawda"
        },
        "phone": "9834223311",
      
      },
      {
        "address": {
  
          "city": "udupi",
          "street": "saddle st",
          "number": 1342,
          "zipcode": "96378-0245"
        },
        "id": 7,
        "email": "michel@gmail.com",
        "username": "michel",
        "password": "f238&@*$",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "michel",
          "lastname": "obama"
        },
        "phone": "87334422255",
       
      },
      {
        "address": {
   
          "city": "mesa",
          "street": "vally view ln",
          "number": 1342,
          "zipcode": "96378-0245"
        },
        "id": 8,
        "email": "jay@gmail.com",
        "username": "jay",
        "password": "William56$hj",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "jay",
          "lastname": "shetty"
        },
        "phone": "9833312222",
       
      },
      {
        "address": {
     
          "city": "miami",
          "street": "avondale ave",
          "number": 345,
          "zipcode": "96378-0245"
        },
        "id": 9,
        "email": "hitesh@gmail.com",
        "username": "hitesh_h",
        "password": "kfejk@*_",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "hitesh",
          "lastname": "chowdary"
        },
        "phone": "98111133322",
       
      },
      {
        "address": {
      
          "city": "fort wayne",
          "street": "oak lawn ave",
          "number": 526,
          "zipcode": "10256-4532"
        },
        "id": 10,
        "email": "akshay@gmail.com",
        "username": "akshay_s",
        "password": "klein*#%*",
        "image":"https://icon-library.com/images/user-account-icon/user-account-icon-19.jpg",
        "name": {
          "firstname": "akshay",
          "lastname": "saini"
        },
        "phone": "9833443344",
       
      },
      
    ];
  }
  constructor() { }
}