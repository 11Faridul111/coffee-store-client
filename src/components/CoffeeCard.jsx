import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
      const {_id, name,chef, supplier,taste,category,details,photo} = coffee;

      const handleDelete = _id =>{
            console.log(_id)
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                  if (result.isConfirmed) {
                  
                  fetch(`http://localhost:5000/coffee/${_id}`,{
                        method:'DELETE',
                  })
                  .then(res=>res.json())
                  .then(data =>{
                        console.log(data)
                       if(data.deletedCount> 0){
                          Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                          } 
                  );
                  const remaining = coffees.filter(cof=> cof._id !== _id)
                  setCoffees(remaining)

                       } 
                  })
                  }
                });

      }
      return (
              <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img className="h-[250px] w-[300px]"
      src={photo} />
  </figure>
  <div className="w-full flex justify-around items-center">
    <div>
    <h2 className="card-title">Name: {name}</h2>
    <p>Chef:{chef}</p>
    <p>Supplier:{supplier}</p>
    </div>
    <div className="card-actions justify-end">
    <div className="join join-vertical space-y-4">
  <button className="btn join-item">View</button>
 <Link to={`updateCoffee/${_id}`}>
 <button className="btn join-item">Edit</button>
 </Link>
  <button onClick={()=> handleDelete(_id)} className="btn join-item bg-orange-400">Delete</button>
</div>
    </div>
  </div>
</div>
      );
};

export default CoffeeCard;