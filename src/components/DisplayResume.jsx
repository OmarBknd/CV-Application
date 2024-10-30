export default function DisplayResume({ educationList, personalInfo }) {
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
        </div>
      </>
    );
  }
  