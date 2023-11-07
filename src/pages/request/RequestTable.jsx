

const RequestTable = ({index}) => {
    console.log(index);

    const {price, deadline, email, email2, jobTitle,status} = index;
    console.log(price)

    return (
        <div>
            <div>
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
                <td> <button className="btn btn-accent mx-auto">Accept</button></td>
                <td> <button className="btn btn-primary mx-auto">Reject</button></td>

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