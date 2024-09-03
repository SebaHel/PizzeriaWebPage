import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Submitted successfully!")
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <span className="material-symbols-outlined">person</span>
        <input
          type="text"
          id="ReservInput"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div >
      <span className="material-symbols-outlined">call</span>
        <input
          type="tel"
          id="ReservInput"
          name="phone"
          placeholder='Phone number'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
      <span className="material-symbols-outlined">calendar_month</span>
        <input
          type="date"
          id="ReservInput"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
      <span className="material-symbols-outlined">edit</span>
        <textarea
          id="ReservTextarea"
          name="message"
          placeholder='Additional Information'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" id='submit'>Submit</button>
    </form>
  );
}

export default ReservationForm;