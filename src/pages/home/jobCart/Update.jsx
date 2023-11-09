import Swal from "sweetalert2";
import Footer from "../../Footer";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const data = useLoaderData();
    console.log(data);

  const  { _id,jobTitle, deadline, maximumPrice, description, minimumPrice, email, category } = data;

    const handleUpdateDetails = event => {
        event.preventDefault();
    
        const form = event.target;
        const jobTitle = form.jobTitle.value;
        const deadline = form.deadline.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
        const minimumPrice = form.minimumPrice.value;
        const category = form.category.value;
        const email = form.email.value;
        const Update = { jobTitle, deadline, maximumPrice, description, minimumPrice, email, category }
        console.log(Update);


         // send data to the server

    fetch(`https://online-market-server.vercel.app/online/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(Update)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.modifiedCount> 0){
            Swal.fire({
                title: 'Success!',
                text: 'Info updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
    }    
    return (
        <div>
           <div className="bg-teal-800 p-24">
            <h2 className="text-3xl font-extrabold text-center mb-10">Update Section</h2>
            <form onSubmit={handleUpdateDetails}>
                {/* first */}
                <div className="md:flex mb-8">

                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="jobTitle" defaultValue={jobTitle} placeholder="Job Title" className="input input-bordered w-full" />
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

                            <input type="text" name="description" defaultValue={description} placeholder="Short Description" className="input input-bordered w-full" />
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

                <input type="submit" value="Update Add Job" className="btn btn-block bg-black text-white" />
            </form>
        
        </div> 
        <div className='mt-10 w-full'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Update;