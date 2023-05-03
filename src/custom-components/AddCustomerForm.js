import { useContext } from "react"
import { CustomerContext } from "../CustomerProvider"

export default function AddCustomerForm() {
    const {onChangeHandler,addCustomer}=useContext(CustomerContext);
  return (
    <div>
    
      <form onSubmit={addCustomer}>
     
        <table >
            <tr>
                <td><label htmlFor='name'>Name :</label></td>
                <td className="text_box"><input type="text" id='name' onChange={onChangeHandler}/><br/><br/></td>
            </tr>
            <tr>
                <td><label htmlFor='address'>Address :</label></td>
                <td className="text_box"><input type="text" id='address' onChange={onChangeHandler}/><br/><br/></td>
            </tr>
        </table>
        <button type='submit'>Add</button>
        
    
      </form>
      
    </div>
  )
}
