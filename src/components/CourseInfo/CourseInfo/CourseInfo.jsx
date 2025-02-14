import React from "react";
import "./CourseInfo.css";

const CourseInfo = ({courses}) => {
  return (
    <div className="course-container" id="course-info">
      {courses.map((course) => (
        <div key={course.id} className="course-card">
          <h2 className="course-title">{course.title}</h2>
          <p className="course-description">{course.description}</p>
          <ul className="course-subjects">
            {course.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CourseInfo;