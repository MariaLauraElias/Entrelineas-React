import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */
let booksInDB = fetch('http://localhost:3001/api/products')
.then(res => res.json())
  .then((data)=>{
    return {
        title: 'Books in Data Base',
        color: 'primary', 
        cuantity: data.total,
        icon: 'fa-clipboard-list'
    }
  });
  
let topicsInDb = fetch('http://localhost:3001/api/topics')
.then(res => res.json())
  .then((data)=>{
    return {
        title: 'Topis in Data Base',
        color: 'success', 
        cuantity: data.total,
        icon: 'fa-award'
    }
  });
  let usersInDb = fetch('http://localhost:3001/api/users')
.then(res => res.json())
  .then((data)=>{
    return {
        title: 'Users in Data Base',
        color: 'warning', 
        cuantity: data.total,
        icon: 'fa-user-check'
    }
  })

let cartProps =[];
Promise.all([booksInDB, topicsInDb, usersInDb])
.then(values=> {
    cartProps = values;
})


function ContentRowBooks(){
    return (
    
        <div className="row">
            
            {cartProps.map( (datos, i) => {

                return <SmallCard {...datos} key={i}/>
            
            })}

        </div>
    )
}


export default ContentRowBooks;