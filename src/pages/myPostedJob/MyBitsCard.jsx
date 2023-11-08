
import axios from "axios";
const MyBitsCard = ({ data }) => {
  console.log(data);

  const rowData =data;
  // const {_id} = rowData;
  // req.
  const handelConfirm = (id) => {
    const status = { status:"complete" };
    axios
      .patch(`http://localhost:5000/bit/${id}`, status)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  // 

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
         
            <tr>
              <th>job title</th>
              <th>Price</th>
              <th>Deadline</th>
              <th>User Email</th>
              <th>Bayer Email</th>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>


            {

              rowData?.map((row, index) => (<tr  key={index}>
                <td>{row.jobTitle}</td>
                <td>{row.price}</td>
                <td>{row.deadline}</td>
                <td>{row.email}</td>
                <td>{row.email2}</td>
                <td>{row.status}</td>
                <td> <button  onClick={() =>handelConfirm(rowData._id)} className="btn btn-secondary mx-auto">Complete Button</button></td>

              </tr>))
            }
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
  );
};

export default MyBitsCard;