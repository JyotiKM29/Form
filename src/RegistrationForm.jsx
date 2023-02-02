import React, { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    photo: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="photo">Photo:</label>
        <input
          type="file"
          name="photo"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
