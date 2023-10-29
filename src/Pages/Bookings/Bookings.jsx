import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingRaws from "./BookingRaws";


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    axios.get(`http://localhost:5000/booking?email=${user.email}`)
        .then(data => setBookings(data.data))
        .catch(err => console.error(err))
        const handleDelete= id=>{
            const proceed= confirm('Are You sure you want to delete?')
            if(proceed)
            {
                fetch(`http://localhost:5000/booking/${id}`,{
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount>0)
                {
                    alert('Data deleted sucessfully!')
                    const remaining= bookings.filter(booking=> booking._id !== id )
                    setBookings(remaining)
                }
            })
            }
            
        }
        const handleConfirmBooking= id=>{
            fetch(`http://localhost:5000/booking/${id}`,{
                method: "PATCH",
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({status: 'confirm'} )
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0)
                {
                    const remaining= bookings.filter(booking=> booking._id !== id)
                    const updated= bookings.filter(booking=> booking._id=== id)
                    updated.status('confirm')
                    const newBooking= [updated, ...remaining]
                    setBookings(newBooking)
                }
            })
        }
    return (
        <div className="space-y-10">
            <h2 className="text-center text-4xl">Total Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Order ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>price</th>
                            <th>Order Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(item => <BookingRaws
                                key={item._id}
                                booking={item}
                                handleDelete={handleDelete}
                                handleConfirmBooking={handleConfirmBooking}
                                ></BookingRaws>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
    // const url= `http://localhost:5000/booking?email=${user.email}`
    // useEffect(()=>{
    //     fetch(url)
    //     .then(res=> res.json())
    //     .then(data=> console.log(data))
    // },[])
};

export default Bookings;