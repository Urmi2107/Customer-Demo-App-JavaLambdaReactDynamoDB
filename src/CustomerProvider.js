import { createContext } from "react";
import { API } from 'aws-amplify';
import { useEffect, useState } from 'react';

const CustomerContext=createContext();
function CustomerProvider(props) {
    const apiName="customers";
    const path="/customers";
    const [customers,setCustomers]=useState([]);
    const [customer,setCustomer]=useState({
        id:"",
      name:"",
      address:""
    })
    const [customersState,setCustomersState]=useState(false);
    const [showcustomers,setShowCustomers]=useState(false);
    const [showAddCustomerForm,setShowAddCustomerForm]=useState(false);
    const [showCustomerUpdateForm,setShowCustomerUpdateForm]=useState(false);
  
   useEffect(()=>{
      getCustomers()
    },[customersState])

  
    const getCustomers=async()=>{
        //if(showcustomers===false){
            await API.get(apiName,path)
            .then(data=>setCustomers(data))
            .catch(e=>console.log(e))
            setShowCustomers(true);
       // }else{
            //setShowCustomers(false);
        //}
     
      
       setShowCustomerUpdateForm(false);
       setShowAddCustomerForm(false);
    }
    const addCustomer=async(event)=>{
      event.preventDefault();
        await API.post(apiName,path,{
          body:customer
        })
        .then(data=>{
          console.log(data);
          setCustomersState(!customersState)
          alert(customer.name+" added")
        })
        .catch(e=>console.log(e))
  
        event.target.reset();
      }
    const onChangeHandler=({target:{id,value}})=>{
        setCustomer({...customer,[id]:value})
      }
      const addCustomerHandler=()=>{
        setShowCustomers(false);
        setShowAddCustomerForm(true);
    }
    const updateCustomerHandler=(customer)=>{
      setCustomer(customer);
      setShowCustomers(false);
      setShowCustomerUpdateForm(true);
  }
  const updateCustomer=async(event)=>{
    event.preventDefault();
    await API.put(apiName,path,{
        body:customer
    })
    .then(data=>{
        console.log(data);
        setShowCustomerUpdateForm(false);
        //setShowCustomers(true);
        alert(customer.name+" updated")
        setCustomersState(!customersState);
        
    })
    .catch(e=>console.log(e))
}
const deleteCustomer=async(customer)=>{
  await API.del(apiName,path,{
      body:customer
  })
  .then(data=>{
       alert(customer.name+" deleted")
      setCustomersState(!customersState);
      console.log(data);
  })
  .catch(e=>console.log(e))
}
    return (
        <CustomerContext.Provider value={{customers,getCustomers,customer,onChangeHandler,showcustomers,addCustomer,
        addCustomerHandler,showAddCustomerForm,updateCustomer,showCustomerUpdateForm,updateCustomerHandler,deleteCustomer}}>
                                        
          {props.children}
        </CustomerContext.Provider>
      )
}
export {CustomerContext,CustomerProvider};