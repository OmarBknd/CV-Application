import deleteSvg from '../assets/deleteSvg.svg'
import addSvg from '../assets/add-circle.svg'
import { useState } from 'react'
export default function Experience(
    {experience,
         onChange,
          handleSave,
          handleCancel,
          handleDelete,
          addJobDescription,
          updateJobDescription,
          deleteJobDescription
        }){
const [showJobTasks, setShowJobTasks] = useState(false)

function handleSubmit(e){
    e.preventDefault()
    handleSave()
}
function handleshowJob(){
    setShowJobTasks(!showJobTasks)
}

    return(
        <form action=""
         onSubmit={handleSubmit}
         
         >
        <div  className="experience-input">
            <label htmlFor="">
            Company
            </label>
            <input 
            required
            type="text"
            name="company"
            value={experience.company}
            onChange={onChange} />
            
            <label htmlFor="">
            Position
            </label>
            <input 
            required
            type="text"
            name="position"
            value={experience.position}
            onChange={onChange} />
            
           <label htmlFor="">
           Location
           </label>
           <input 
            required
            type="text"
            name="location"
            value={experience.location}
            onChange={onChange} />
           
           <label htmlFor="">
           Start date
           </label>
            <input 
            required
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={onChange} />
           
            <label htmlFor="">
            End date
            </label>
            <input 
            required
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={onChange} />
           
           
           <label 
           className='job-list-button'
           onClick={handleshowJob} htmlFor="">
           Job description
           </label>
           {showJobTasks && (
            <div className='job-list'>
            {experience.jobDescription.map((task,i)=>(
                <div className='job-description' key={i}>
                    <input 
                    type="text" 
                    value={task}
                    onChange={(e)=>updateJobDescription(e,i)}
                    >
                    </input>
                    <button
                    className='delete-job-button'
                     onClick={()=>deleteJobDescription(i)}>
                        {<img src={deleteSvg}/>}
                        </button>
                </div>
            ))}
            <button 
            className='add-job-button'
             onClick={addJobDescription}>
                {<img src={addSvg}/>}
                </button>
            </div>
            
        )}
            
            
          
           
            <div>
            <button type='submit' >save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
            
            <button  onClick={handleDelete}>Delete</button>
            
        </div>
        </form>
    )
   
    
}

