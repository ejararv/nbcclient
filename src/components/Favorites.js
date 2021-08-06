import React, { useEffect} from 'react'
import Card from './Card'

export const Favorites = ({ name, kod, mid }) => {

const store = []
const data = {...localStorage}



useEffect (() => {

   
    if(data === null){
       console.log(data)
    }else {
       store.push(data)
    }

    console.log(store)
})

return (
 

       
 
  <Card
  key={store.id}
  kod={store.kod}></Card>
)

}