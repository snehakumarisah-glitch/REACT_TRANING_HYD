import axios from "axios";
import { Customer } from "../model/Customer";
import Link from "next/link";
import { Suspense } from "react";


export default async function ListCustomerPage(){
    return(
        <div>
            <h3>
                <Suspense fallback={<div className="alert alert-info"> Customers C1...</div>}>
                    <CustmerPage interval={1000}/>
                </Suspense>
                <Suspense fallback={<div className="alert alert-info"> Customers C2 ...</div>}>
                    <CustmerPage interval={7000}/>
                </Suspense>
            </h3>
        </div>
    )
}

export async function CustmerPage({interval}: {interval: number}) {

    //Simulate delay
    await new Promise((resolve => setTimeout(resolve, interval)))

    //api call
    const url = "http://localhost:9000/customers";

    //in client cmp we can use axios /fetch
    // const response = await axios.get<Customer[]>(url);
    // const customers = response.data;

    // server comp prefer to use fetch for api call
    const response = await fetch(url, {method:"GET"});
    const customers:Customer[] = await response.json() as Customer[];


    
    
    return(
        <div> 
            <h3>
                Customers
            </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer: any) => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td><Link href={"/customers/" + customer.id} >{customer.name}</Link></td>
                            <td>{customer.location}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}