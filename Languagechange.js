import React, { Children, useContext } from 'react'
import { language } from './Languagedata'

function Languagechange() {

  const data = useContext(language);

  const handledata=(e)=>{
    if(e.target.value){
      {console.log(data.map(item=>item.fr))}
    }
    else{
      {console.log(data.map(item=>item.en))}
    }
  }

  const themechange=()=>{
         
  }

  return (
    <div>
        <button onClick={handledata} value={'english'}>english</button>
        <button onClick={themechange}>Dark</button>
        <ul>{data.map(item=><li>{item.en}</li>)}</ul>
    </div>
  )
}
export default Languagechange
