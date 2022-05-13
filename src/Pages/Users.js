import React from "react";
import "../Assets/CSS/Users.css"
import userimage from "../Assets/Images/userimage.png"
export default function Users(){
const Data=[
    { 
        "user_id": 1,
        "username": "Ilyes",
        "email": "ilyes@gmail.com"
      
       
    },
    {
        "user_id": 2,
        "username": "Iheb",
        "email": "iheb@gmail.com"
    },
    {
        "user_id": 3,
        "username": "Test",
        "email": "test@gmail.com"
    },
    {
        "user_id": 4,
        "username": "Test",
        "email": "test@gmail.com"
    },
    {
        "user_id": 5,
        "username": "Test",
        "email": "test@gmail.com"
    },
    {
        "user_id": 6,
        "username": "Test",
        "email": "test@gmail.com"
    },
]
    return(
        
       <div>
           <h2> Users List :</h2>
         
           <div class="list-wrapper" ng-app="app" ng-controller="MainCtrl as ctrl">
  <ul class="list">
  {Data.map((item) => {
            return(
    <li class="list-item" >
      <div>
        <img src={userimage} class="list-item-image"/>
      </div>
      <div class="list-item-content">
        <h4>{item.username}</h4>
       
      </div>
    </li>

   );
        })}
          </ul>
</div>
       </div>
    )
}