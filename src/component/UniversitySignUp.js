import React, { useState } from "react";
import { json } from "react-router-dom";

export default function UniversityLogin() {
  const [unicreds, setunicreds] = useState({
    name: "",
    email: "",
    pub_key: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const response = await fetch("http://localhost:5000/api/createusers",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: unicreds.name,
        email: unicreds.email,
        pub_key: unicreds.pub_key,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="university-body">
          <div className="form-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label htmlFor="" className="form-label">
                  University Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="University Name"
                  value={unicreds.name}
                  onChange={(e) =>
                    setunicreds({ ...unicreds, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email Id
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  value={unicreds.email}
                  onChange={(e) =>
                    setunicreds({
                      ...unicreds,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="public_key" className="revoke">
                  Public Key<>(Account with which you will mint)</>
                </label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="Public Key"
                  value={unicreds.pub_key}
                  onChange={(e) =>
                    setunicreds({
                      ...unicreds,
                      pub_key: e.target.value,
                    })
                  }
                />
              </div>

              <button type="submit" className="btn btn-primary mr-3" id="uls">
                Sign Up
              </button>
              <button type="submit" className="btn btn-danger" id="ull">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
          
    </>
  );
}
