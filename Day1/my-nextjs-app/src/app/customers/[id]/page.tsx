import { Customer } from "@/app/model/Customer";
import Link from "next/link"

type ViewCustomerProps = {
    params: Promise<{ id: number }>
}
export default async function ViewCustomer(props: ViewCustomerProps) {

    const id = (await (props.params)).id

    await new Promise((resolve => setTimeout(resolve, 1000)))

    const response = await fetch(`http://localhost:9000/customers/${id}`)
    const customer = await response.json() as Customer;

    return (
        <div>
            <h3>
                View CustomerL {id}
            </h3>
            <Link href="/customers">Back</Link>
        </div>
    )

}