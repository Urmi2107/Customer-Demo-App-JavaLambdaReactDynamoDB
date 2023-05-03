import { useContext } from "react"
import { CustomerContext } from "../CustomerProvider"

function UpdateCustomerForm() {
    const {customer,updateCustomer,onChangeHandler}=useContext(CustomerContext);
  return (
    <div>
        <form>
     
     <table >
         <tr>
             <td><label htmlFor='name'>Name :</label></td>
             <td className="text_box"><input type="text" id='name' value={customer.name} onChange={onChangeHandler}/><br/><br/></td>
         </tr>
         <tr>
             <td><label htmlFor='address'>Address :</label></td>
             <td className="text_box"><input type="text" id='address' value={customer.address} onChange={onChangeHandler}/><br/><br/></td>
         </tr>
     </table>
     <button type='button' onClick={updateCustomer}>Update</button>
     </form>
 
   
    </div>
  )
}

export default UpdateCustomerForm
