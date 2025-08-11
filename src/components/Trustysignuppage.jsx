import '../styles/Trustysignuppage.css';
function TrustySignupPage() {
  return (
    <div className="trusty-signup-page">
        <div className="details">
            <h1>Trusty signup</h1>
            <hr></hr>
            <p>Welcome to the Trusty signup page. Please fill in the details below to create your account.</p>
            <lable>Name</lable>
            <input type="text" placeholder="Full Name" />
            <lable>Email</lable>
            <input type="email" placeholder=" Email" />
            <lable>Phone number</lable>
            <input type="text" placeholder=" Phone number" />
            <lable>Shop name</lable>
            <input type="text" placeholder=" Shop name" />
            <label>Shop address/location</label>
            <input type="text" placeholder=" Shop address/location" />
            <lable>Shop image</lable>
            <input type="file" placeholder=" Shop image" />
            <lable>Password</lable>
            <input type="password" placeholder=" Password" />
            <button className="btn btn-primary">Register</button>
            

        </div>
        

    </div>
  );
}
export default TrustySignupPage;