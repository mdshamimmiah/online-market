

const MyBitsCard = ({item}) => {
    const {price, deadline, email, email2} = item;
    console.log(item);

    return (
        <div>
            <div>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Price</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{price}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      row 2
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyBitsCard;