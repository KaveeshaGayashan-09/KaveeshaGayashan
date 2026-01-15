import React from 'react';


interface Qualification {
  id: number;
  type: 'Exam' | 'Certification';
  title: string;
  institution: string;
  year: string;
  details: string[]; // For results or specific modules
  status?: string; // e.g., "Pass", "Credit", "Distinction"
}

const educationData: Qualification[] = [
  {
    id: 1,
    type: 'Exam',
    title: 'G.C.E. Advanced Level (A/L)',
    institution: 'Vishvoda National Collage',
    year: '2024',
    details: ['Japanese: A', 'Economics: B', 'ICT: C'],
    status: 'Arts Stream'
  },
  {
    id: 2,
    type:'Certification',
    title: 'Other Certifications',
    institution: 'ESOFT METRO CAMPUS',
    year: '2023',
    details: ['Assured Diploma in IT', 'Diploma In English'],
  },
//    {
//     id: 3,
//     type:'Certification',
//     title: 'Other Certifications',
//     institution: 'ESOFT METRO CAMPUS',
//     year: '2023',
//     details: ['Assured Diploma in IT', 'Diploma In English'],
//   },
  {
    id: 4,
    type: 'Exam',
    title: 'G.C.E. Ordinary Level (O/L)',
    institution: 'S.W.R.D Bandaranaika Collage Kurunegala',
    year: '2021/2022',
    details: ['8/9 As including Mathematics and English'],
  }
];

const Education: React.FC = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Educational Background</h2>
      <div className="timeline">
        {educationData.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="education-card">
              <span className={`badge ${item.type.toLowerCase()}`}>{item.type}</span>
              <span className="year">{item.year}</span>
              <h3 className="degree-title">{item.title}</h3>
              <p className="institution">{item.institution}</p>
              {item.status && <p className="stream">{item.status}</p>}
              <ul className="details-list">
                {item.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;