import {React, useState, useEffect} from 'react';
import SmallCard from './SmallCard';

function ContentRowBooks (){
let [totalProducts, setTotalProducts] = useState({
          title: 'Books in Data Base',
          color: 'primary', 
          cuantity: null,
          icon: 'fa-clipboard-list'
      });
let [totalTopics, setTotalTopics] = useState({
          title: 'Topis in Data Base',
          color: 'success', 
          cuantity: null,
          icon: 'fa-award'      
})
let [totalUsers, setTotalUsers] = useState({
          title: 'Users in Data Base',
          color: 'warning', 
          cuantity: null,
          icon: 'fa-user-check'
})
  useEffect(()=> {
    fetch('http://localhost:3001/api/counter')
    .then(res => res.json())
    .then((data)=>{
       setTotalProducts({title: 'Books in Data Base',
       color: 'primary', 
       cuantity: data.totalProducts,
       icon: 'fa-clipboard-list'})
       setTotalTopics({title: 'Topis in Data Base',
       color: 'success', 
       cuantity: data.totalTopics,
       icon: 'fa-award' })
       setTotalUsers({title: 'Users in Data Base',
       color: 'warning', 
       cuantity: data.totalUsers,
       icon: 'fa-user-check'})    
         
   })
  },[])
  let cartProps = [totalProducts,totalUsers, totalTopics]
  return (
    
            <div className="row">
                
                {cartProps.map( (datos, i) => {
    
                    return <SmallCard {...datos} key={'counter'+ i}/>
                
                })}
    
            </div>
        )
}
  export default ContentRowBooks;