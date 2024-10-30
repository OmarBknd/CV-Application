import { useState } from 'react'
import './App.css'
import DisplayResume from './components/DisplayResume'
import Education from './components/Education'
function App() {
  const [education, setEducation] = useState({
    school:'',
    degree:'',
    startDate:'',
    endDate:'',
  })
  const [educationList, setEducationList] = useState([])
  const [educationEditIndex, setEducationEditIndex] = useState(null)
function handleChange(e){
  const {name, value} = e.target
  setEducation({
    ...education,
    [name]: value
  })
}
console.log(education);

function addNewEducation(){
 
  const addNew = { 
    school:'',
    degree:'',
    startDate:'',
    endDate:'',}

   setEducationList((prevList) => [...prevList,addNew])
   setEducationEditIndex(educationList.length)
}

function handleSave(){
  if(educationEditIndex !== null){
    const updateEducationList = [...educationList];
    updateEducationList[educationEditIndex] = education;
    setEducationList(updateEducationList);
    setEducationEditIndex(null)
  }else{
    setEducationList([...educationList, education])
  }
 
}
function handleCancel(){
  setEducationList(educationList.filter((_,i)=> i !==''))
  setEducationEditIndex(null)
}
function handleDelete(index){
  setEducationList(educationList.filter((_,i)=>i !== index))
  setEducationEditIndex(null)
}
function handleEdit(index){
  setEducation(educationList[index])
  setEducationEditIndex(index)
}
  return (
    <>
    <div className='container'>
    <div>
  <h2>Education</h2>
  <div>
    {educationEditIndex === null ? (
      <div>
        {educationList.map((school, index) => (
          <div key={index} name={index} onClick={() => handleEdit(index)}>
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
</div>

    
   
    
    
    <DisplayResume
   
    educationList={educationList}/>
    </div>
    </>
    
  )
 
  
}

export default App
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
