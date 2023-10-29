import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const CheckOut = () => {
    const { _id, title, img, price } = useLoaderData()
    const {user}= useContext(AuthContext)
    const handleBooking= e=>{
        e.preventDefault()
        const form= e.target
        const name= form.name.value
        const email= user?.email
        const date= form.date.value
        const price= form.price.value
        const order={
            CustomerName: name,
            email,
            OrderDate: date,
            price,
            service:_id
        }
        console.log(order)
        axios.post('http://localhost:5000/booking',order)
        .then(data=> console.log(data))
    }
    console.log(title)
    return (
        <div>
            <h2 className="text-4xl text-center font-bold text-orange-600">Service Name: {title}</h2>
            <form onSubmit={handleBooking}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" placeholder="password" defaultValue={'$'+30} className="input input-bordered" required />
                </div>
                
                </div>
                <div className="my-10">
                    <input type="submit" className="btn btn-block btn-primary" value="Book Ordee" />
          
                </div>
                
            </form>
        </div>
    );
};

export default CheckOut;