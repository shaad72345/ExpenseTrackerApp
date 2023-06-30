import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'


function Tracker() {
    const [type, setType] = useState("")
  return (
    <div>

        <br />
  <div style={{boxShadow:"0px 5px 15px", width:"600px", margin:"auto", padding:"20px"}}>

    
    <h1 style={{fontSize:"35px"}}>Tracker</h1>
    <br />
    <select name="" id="type"  onChange={(e)=>{setType(e.target.value)}}>
        <option value="">Select Type</option>
        <option value="Income">Income</option>
        <option value="Expence">Expense</option>
    </select>
    <br />
    <br />
    { type=="Income" ?
<select name="Category" id="">
    <option value="">Select Category</option>
    <option value="Salery">Salery</option>
    <option value="Gift">Gift</option>
    <option value="Refund">Refund</option>
    <option value="other">Other</option>
</select>
:
<select name="Category" id="">
    <option value="">Select Category</option>
    <option value="foodanddrink">Food & Drink</option>
    <option value="shopping">Shopping</option>
    <option value="Housing">Housing</option>
    <option value="Bills">Bills</option>
</select>
}
<br /><br />
<input type="number" placeholder='Enter Amount' />

<br /><br />
<input type="date" placeholder='Enter date' /> <br /> <br />
   
<Button colorScheme='blue'>Create</Button>
</div>
     </div>
  )
}

export default Tracker