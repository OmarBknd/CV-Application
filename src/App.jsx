import { useState } from "react";
import "./App.css";
import DisplayResume from "./components/DisplayResume";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email:"",
    phoneNumber:'',
  });
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
    jobDescription: "",
  })
  const [experienceList, setExperienceList] = useState([]);
  const [experienceEditIndex, setExperienceEditIndex] = useState(null);
  const [educationList, setEducationList] = useState([]);
  const [educationEditIndex, setEducationEditIndex] = useState(null);
  function handleChange(e) {
    const { name, value } = e.target;
    setEducation({
      ...education,
      [name]: value,
    });
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
    setExperience({
      ...experience,
      [name]: value,
    })
  }

  function addNewEducation() {
    const addNew = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    };

    setEducationList((prevList) => [...prevList, addNew]);
    setEducationEditIndex(educationList.length);
    setEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    });
  }

  function addNewExperience() {
    const addNew = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
    };

    setExperienceList((prevList) => [...prevList, addNew]);
    setExperienceEditIndex(experienceList.length);
    setExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      jobDescription: "",
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
}
function handleExperienceCancel(){
  setExperienceList(experienceList.filter((_, i) => i !== ""));
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
        <PersonalInfo personalInfo={personalInfo} onChange={handleChange} />
        
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
                onChange={handleChange}
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
                onChange={handleChange}
                handleSave={handleExperienceSave}
                handleCancel={handleExperienceCancel}
                handleDelete={() => handleExperienceDelete(experienceEditIndex)}
              />
            )}
          </div>
        </div>
        </div>
        <DisplayResume
          personalInfo={personalInfo}
          educationList={educationList}
          experienceList={experienceList}
        />
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
