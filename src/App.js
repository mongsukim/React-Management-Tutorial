
import React, { Component } from 'react';
import Customer from './components/Customer'

const customers = [
  {
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남자',
  'job':'학생'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/1',
  'name':'야옹',
  'birthday':'981002',
  'gender':'남자',
  'job':'학생'
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/2',
  'name':'모찌',
  'birthday':'930408',
  'gender':'여자',
  'job':'직장인'
}
]

function App() {
    return (
      <div>
       {
         customers.map( c => {
           return(
             <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
             />
           );
         })
       }
       </div>
    );
  
}

export default App;
