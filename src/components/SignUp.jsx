import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


 
const SignUp = () => {
      const {createUser} = useContext(AuthContext);
      const handleSignUp = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name,email,password)
            createUser (email, password)
            .then(result=>{
                  console.log(result.user)
                  const createdAt = result.user?.metadata?.creationTime;
                  const user = {email, createdAt:createdAt };
                  fetch('http://localhost:5000/user',{
                    method:'POST',
                    headers:{
                      'content-type':'application/json'
                    },
                    body:JSON.stringify(user) 
                  })
                  .then(res =>res.json())
                  .then(data =>{
                    console.log(data)
                    if(data.insertedId){
                      console.log
                      ('User Added successfully')
                    }
                  })
            })
            .catch(error=>{
                  console.error(error)
            })
      }

      return (
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center ">
      <h1 className="text-5xl font-bold mb-4">Register Now</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
      );
};

export default SignUp;