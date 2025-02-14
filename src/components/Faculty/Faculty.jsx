import React from "react";
import "./Faculty.css";

const facultyMembers = [
  {
    id: 1,
    name: "Сейлова Нургуль Абадуллаевна",
    position: "Декан",
    workplace: "IITU University",
    image: "https://iitu.edu.kz/media/images/Seilova_Nurgul_Abadullaevna_dekan_F.original.format-jpeg.jpg"
  },
  {
    id: 2,
    name: "Кашаганова Зарина Абдуллаевна",
    position: "Заместитель декана по НИР и учебной работе",
    workplace: "IITU University",
    image: "https://iitu.edu.kz/media/images/kza1.original.format-jpeg.jpg"
  },
  {
    id: 3,
    name: "Аубакирова Айгерим Аблакимовна",
    position: "Заместитель декана по воспитательной работе",
    workplace: "IITU University",
    image: "https://iitu.edu.kz/media/images/aubakirova-removebg-preview_xG7bdMB.original.format-jpeg.jpg"
  },
];

const Faculty = () => {
  return (
    <div className="faculty-container" id="faculty">
      <h2>Наша администрация Факультета</h2>
      <div className="faculty-list">
        {facultyMembers.map((member) => (
          <div key={member.id} className="faculty-card">
            <img src={member.image} alt={member.name} className="faculty-image" />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p><strong>Место работы:</strong> {member.workplace}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
