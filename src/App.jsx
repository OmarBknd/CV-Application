import { useState } from "react";
import "./App.css";
import DisplayResume from "./components/DisplayResume";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import data from './components/data.json'
function App() {
  const [personalInfo, setPersonalInfo] = useState(data.person);
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    jobDescription: [],
  })
  const [experienceList, setExperienceList] = useState(data.experience );
  const [experienceEditIndex, setExperienceEditIndex] = useState(null);
  const [educationList, setEducationList] = useState(data.education);
  const [educationEditIndex, setEducationEditIndex] = useState(null);
  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
   
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
   
  }
  function handleEducationChange(e){
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
  }
  function handleExperienceChange(e){
    const { name, value } = e.target;
    setExperience({
      ...experience,
      [name]: value,
    })
  }
// hnadle the job description list
  function addJobDescription(){
    
    setExperience({
      ...experience,
      jobDescription:[...experience.jobDescription,'']
    })
  }
  function updateJobDescription(e,index){
    const updateDescription = [...experience.jobDescription];
    updateDescription[index] = e.target.value;
    setExperience({
      ...experience,
      jobDescription:updateDescription
    })

  }
  function deleteJobDescription(index) {
    const updateJobDescriptions = experience.jobDescription.filter((_, i) => i !== index);
    setExperience({
        ...experience,
        jobDescription: updateJobDescriptions,
    });
}

  function addNewEducation() {
    const addNew = {
      school: "",
      degree: "",
      location:'',
      startDate: "",
      endDate: "",
    };

    setEducationList((prevList) => [...prevList, addNew]);
    setEducationEditIndex(educationList.length);
    setEducation({
      school: "",
      degree: "",
      location:'',
      startDate: "",
      endDate: "",
    });
  }

  function addNewExperience() {
    const addNew = {
      company: "",
      position: "",
      location:'',
      startDate: "",
      endDate: "",
      jobDescription: [],
    };

    setExperienceList((prevList) => [...prevList, addNew]);
    setExperienceEditIndex(experienceList.length);
    setExperience({
      company: "",
      position: "",
      location:'',
      startDate: "",
      endDate: "",
      jobDescription: [],
    });
  }
  function handleExperienceSave() {
    if(experienceEditIndex !== null){
      const updateExperienceList = [...experienceList];
      updateExperienceList[experienceEditIndex] = experience;
      setExperienceList(updateExperienceList);
      setExperienceEditIndex(null);
  }
  else{
    setExperienceList([...experienceList, experience]);
  }
  setExperience({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    jobDescription: [],
});
}
function handleExperienceCancel(){
  setExperience({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    jobDescription: [],
});
  setExperienceEditIndex(null)
}

function handleExperienceDelete(index){
  setExperienceList(experienceList.filter((_, i) => i !== index));
  setExperienceEditIndex(null);
}
function handleExperienceEdit(index){
  setExperience(experienceList[index]);
  setExperienceEditIndex(index);
}
  function handleSave() {
    if (educationEditIndex !== null) {
      const updateEducationList = [...educationList];
      updateEducationList[educationEditIndex] = education;
      setEducationList(updateEducationList);
      setEducationEditIndex(null);
    } else {
      setEducationList([...educationList, education]);
    }
  }
  function handleCancel() {
    setEducationList(educationList.filter((_, i) => i !== ""));
    setEducationEditIndex(null);
  }
  function handleDelete(index) {
    setEducationList(educationList.filter((_, i) => i !== index));
    setEducationEditIndex(null);
  }
  function handleEdit(index) {
    setEducation(educationList[index]);
    setEducationEditIndex(index);
  }
  return (
    <>
      <div className="container">
        <div>
        <div>
        <h2>Personal information</h2>
        <PersonalInfo personalInfo={personalInfo} onChange={handlePersonalInfoChange} />
        
        </div>
      <div>
          
          <div>
          <h2>Education</h2>
            {educationEditIndex === null ? (
              <div>
                {educationList.map((school, index) => (
                  <div
                    key={index}
                    name={index}
                    onClick={() => handleEdit(index)}
                  >
                    <h2>{school.school}</h2>
                  </div>
                ))}
                <button onClick={addNewEducation}>Add</button>
              </div>
            ) : (
              <Education
                education={education}
                onChange={handleEducationChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
                handleDelete={() => handleDelete(educationEditIndex)}
              />
            )}
          </div>
          <div>
            <h2>Experience</h2>
            {experienceEditIndex === null ? ( 
              <div>
                {experienceList.map((company, index) => (
                  <div
                    key={index}
                    name={index}
                    onClick={() => handleExperienceEdit(index)}
                  >
                    <h2>{company.company}</h2>
                  </div>
                ))}
                <button onClick={addNewExperience}>Add</button>
              </div>
            ) : (
              <Experience
                experience={experience}
                onChange={handleExperienceChange}
                handleSave={handleExperienceSave}
                handleCancel={handleExperienceCancel}
                handleDelete={() => handleExperienceDelete(experienceEditIndex)}
                addJobDescription={addJobDescription}
                updateJobDescription={updateJobDescription}
                deleteJobDescription={deleteJobDescription}
              />
            )}
          </div>
        </div>
        </div>
        <div>
        <DisplayResume
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
        </div>
      </div>
    </>
  );
}

export default App;
//<div>
//<a href="https://vite.dev" target="_blank">
//  <img src={viteLogo} className="logo" alt="Vite logo" />
//</a>
//<a href="https://react.dev" target="_blank">
//  <img src={reactLogo} className="logo react" alt="React logo" />
//</a>
//</div>
//<h1>Vite + React</h1>
//<div className="card">
//<button onClick={() => setCount((count) => count + 1)}>
//  count is {count}
//</button>
//<p>
//  Edit <code>src/App.jsx</code> and save to test HMR
//</p>
//</div>
//<p className="read-the-docs">
//Click on the Vite and React logos to learn more
//</p>
