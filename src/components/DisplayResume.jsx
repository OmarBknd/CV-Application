export default function DisplayResume({
  educationList,
  experienceList,
  personalInfo,
  expertise
}) {


  return (
    <>
      <div className="display-cv">
        <div className="display-personal-info">
          <h2>{personalInfo.name}</h2>
          <div>
            <p>{personalInfo.email}</p>
            <p>❖{personalInfo.phoneNumber}</p>
            <p>❖{personalInfo.location}</p>
          </div>
        </div>
        <div className="display-experience">
          <h3>WORK EXPERIENCE</h3>
          <hr />
          {experienceList.map((exp, index) => (
            <div className="display-experience" key={index}>
              <div>
                <h5>{exp.company}</h5>

                <h5>{exp.location}</h5>
              </div>
              <div>
                <p>{exp.position}</p>
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <div>
                <ul>{exp.jobDescription.map((task,i)=>(
                  <li key={i}>{task}</li>
                ))}</ul>
              </div>
            </div>
          ))}
        </div>
        <div className="display-education">
          <h3>EDUCATION</h3>
          <hr />
          {educationList.map((edu, index) => (
            <div key={index}>
              <div>
                <h5> {edu.school}</h5>
                <h5>{edu.location}</h5>
              </div>
              <div>
                <p> {edu.degree}</p>
                <p>
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="display-expertise">
          <h3>SKILLS & INTERESTS</h3>
          <hr />
          {expertise.skill && <p><b>Skills:</b> {expertise.skill}</p>}
          {expertise.interest && <p><b>Interests:</b> {expertise.interest}</p>}
        </div>
      </div>
    </>
  );
}
