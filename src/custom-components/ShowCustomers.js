import { Card } from '@aws-amplify/ui-react';
import { useContext } from 'react';
import { CustomerContext } from '../CustomerProvider';
export default function ShowCustomers() {
    const {customers,updateCustomerHandler,deleteCustomer}=useContext(CustomerContext);
  return (
         <table>
            <tr>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>ACTIONS</th>
          </tr>
       {customers.map((customer,index)=>
          <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.address}</td> 
              <td>
              <button type='button' onClick={()=>{updateCustomerHandler(customer)}}>Update</button>&nbsp;
              <button type='button' onClick={()=>{deleteCustomer(customer)}}>Delete</button>
              </td>
            </tr>
              )
            }
        </table>
  );
}


/*<Card key={index} style={{backgroundColor:"lavender",width:"30%",margin:"1rem auto"}}>
            <h4>{customer.name}</h4>
            <p>{customer.address}</p>
            
            <button type='button' onClick={()=>{updateCustomerHandler(customer)}}>Update</button><hr/>
            <button type='button' onClick={()=>{deleteCustomer(customer)}}>Delete</button>
          </Card>*/