import Swal from 'sweetalert2'
const AddCoffee = () => {
     
      const handleAddCoffee = event =>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const chef = form.chef.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category= form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
           
            const newCoffee = {name,chef, supplier,taste,category,details,photo};

            console.log(newCoffee)
      fetch('http://localhost:5000/coffee',{
            method:'POST',
            headers:{
            'content-type':'application/json'
            },
            body:JSON.stringify(newCoffee)
      })
      .then(res=>res.json())
      .then(data =>{
            console.log(data)
            if(data.insertedId){
                  Swal.fire({
                        title: 'Success!',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })    
            }
      })
      
      
      }


      return (
            <div className="bg-[#F4F3F0] p-12">
      <h1 className="text-2xl font-bold"><i>Add New Coffee</i></h1>
<p className="text-xl font-medium px-20 py-8">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
<form onSubmit={handleAddCoffee}>
    <div className="md:flex gap-6">
    <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full" required />
        </div>
    <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Chef</span>
          </label>
          <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full" required />
        </div>
    </div>                    
    <div className="md:flex gap-6">
    <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Supplier</span>
          </label>
          <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full" required />
        </div>
    <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Taste</span>
          </label>
          <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full" required />
        </div>
    </div>                    
    <div className="md:flex gap-6">
    <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full" required />
        </div>
    <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full" required />
        </div>
    </div>                    
    <div>
    <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" required />
        </div>
    </div>
        <input type="submit" value="Add Coffee" className="btn w-full bg-[#D2B48C] mt-8" />            
</form>
            </div>
      );
};

export default AddCoffee;