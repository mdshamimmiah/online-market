
// import Swal from 'sweetalert2'
import Swal from 'sweetalert2';
import { AuthContext } from '../Firebase/AuthProvider';
import { useContext } from 'react';
import Footer from '../pages/Footer';



const AddJob = () => {


    const { user } = useContext(AuthContext);

    const handleAddProduct = event => {

        event.preventDefault();




        const form = event.target;

        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
        const minimumPrice = form.minimumPrice.value;
        const category = form.category.value;
        const email = form.email.value;
        const newAddJob = { jobTitle, deadline, maximumPrice, description, minimumPrice, email, category }
        console.log(newAddJob);


        // send data to the server

        fetch('http://localhost:5000/online', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddJob)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
    <div>

<div className="bg-green-600 p-24">
            <h2 className="text-3xl font-extrabold text-center mb-10">Add Job</h2>
            <form onSubmit={handleAddProduct}>
                {/* first */}
                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input readOnly value={user?.email} type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobTitle" placeholder="Job Title" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* second */}
                <div className="md:flex mb-8">


                    <div className="form-control md:w-1/2">
                        <div className="w-full">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-purple-700">Category</span>
                                </label>
                                <label className="">
                                    <select name="category" required className="select  w-full">
                                        <option value="web-development">Web Development</option>
                                        <option value="digital-marketing">Digital Marketing</option>
                                        <option value="graphics-design">Graphics Design</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text"> Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* third */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="minimumPrice" placeholder="Minimum Price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Maximum price
                            </span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="maximumPrice" placeholder="Maximum price" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>




                <div className="md:flex mb-8">


                    <div className="form-control md:w-full ">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">

                            <input type="date" name="deadline" placeholder="DeadLine" className="input input-bordered w-full" />
                        </label>
                    </div>


                </div>






                {/* four */}

                <input type="submit" value="Add Job" className="btn btn-block bg-black text-white" />
            </form>
          
        </div>
<Footer></Footer>
    </div>
        
    );
};

export default AddJob;