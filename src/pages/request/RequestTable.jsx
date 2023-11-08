import axios from "axios";


const RequestTable = ({index}) => {
    console.log(index);

    const {_id,price, deadline, email, email2, jobTitle,status} = index;
    console.log(price)


    // 

    const handelAkcept = (id) => {
    const status = { status:"progress" };
    axios
      .patch(`http://localhost:5000/bit/${id}`, status)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
    const handelReject = (id) => {
    const status = { status:"Reject" };
    axios
      .patch(`http://localhost:5000/bit/${id}`, status)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
// 
    return (
        <div>
            <div className="">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
         
            <tr>
              <th>job title</th>
              <th>User Email</th>
              <th>Deadline</th>
              <th>Price</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>


            
            <tr>
             
                <td>{jobTitle}</td>
                <td>{email}</td>
                <td>{deadline}</td>
                <td>{price}</td>
                <td>{status}</td>
                <td> <button onClick={() =>handelAkcept(_id)} className="btn btn-accent mx-auto">Accept</button></td>
                <td> <button onClick={() =>handelReject(_id)} className="btn btn-primary mx-auto">Reject</button></td>

              </tr>
            
            {/* row 1 */}
            <tr>
            
            <td></td>
            <td></td>
            <td></td>
           </tr>
            </tbody>
        </table>
      </div>
    
    </div>
        </div>
    );
};

export default RequestTable;