export default function DisplayResume({ 
  educationList,
  experienceList,
   personalInfo }) {
    console.log("resume", educationList);
  
    return (
      <>
        <div className="display-cv">
          <div>
            <p>{personalInfo.name}</p>
          </div>
          <div>
            {educationList.map((edu, index) => (
              <div key={index}>
                <p> {edu.school}</p>
                <p> {edu.degree}</p>
                <p> {edu.startDate}</p>
                <p> {edu.endDate}</p>
              </div>
            ))}
          </div>
          <div>
            {experienceList.map((exp, index) => (
              <div key={index}>
                  <p>{exp.company}</p>
                  <p>{exp.position}</p>
                  <p>{exp.startDate}</p>
                  <p>{exp.endDate}</p>
                  <p>{exp.jobDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  