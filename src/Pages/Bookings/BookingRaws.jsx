

const BookingRaws = ({ booking,handleDelete, handleConfirmBooking }) => {
    const { _id, CustomerName, email, OrderDate, price, status } = booking
    
    return (

        <tr className="bg-base-200">
            <th>{_id}</th>
            <td>{CustomerName}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{OrderDate}</td>
            <th onClick={()=>handleDelete(_id)}><button className="btn btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></th>
            <th>
                {
                    status === 'confirm'? <span className="text-primary font-bold">Confirmed</span>:
                    <span onClick={()=>handleConfirmBooking(_id)}>Please confirm order</span>
                }
            </th>
        </tr>

    );
};

export default BookingRaws;