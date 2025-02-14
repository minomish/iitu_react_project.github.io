import React, { useState } from "react";
import "./CourseEnrollment.css";

const CourseEnrollment = ({ courses }) => {
  const [formData, setFormData] = useState({ name: "", email: "", course: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="enrollment-container" id="course-enrollment">
      <h2>Запись на курс</h2>
      <div className="enrollment-content">
        {submitted ? (
          <p className="success-message">
            Вы успешно записались на курс: {formData.course}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="enrollment-form">
            <label>
              Имя:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Выберите курс:
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Выберите курс</option>
                {courses.map((course) => (
                  <option key={course.id} value={course.title}>
                    {course.title}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="reg-button">
              REGISTER FOR COURSE
            </button>
          </form>
        )}

        <img
          src="https://the-tech.kz/wp-content/uploads/2023/10/1200px-zdanie_mezhdunarodnogo_universiteta_informaczionnyh_tehnologij.jpeg"
          alt="University Building"
          className="course-image"
        />
      </div>
    </div>
  );
};

export default CourseEnrollment;
