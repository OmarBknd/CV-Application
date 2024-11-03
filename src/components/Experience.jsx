
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


    return(
        <div  className="experience-input">
            <label htmlFor="">
            Company
            </label>
            <input 
            type="text"
            name="company"
            value={experience.company}
            onChange={onChange} />
            
            <label htmlFor="">
            Position
            </label>
            <input 
            type="text"
            name="position"
            value={experience.position}
            onChange={onChange} />
            
           <label htmlFor="">
           Location
           </label>
           <input 
            type="text"
            name="location"
            value={experience.location}
            onChange={onChange} />
           
           <label htmlFor="">
           Start date
           </label>
            <input 
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={onChange} />
           
            <label htmlFor="">
            End date
            </label>
            <input 
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={onChange} />
           
           
           <label  htmlFor="">
           Job description
           </label>
            {experience.jobDescription.map((task,i)=>(
                <div className="job-description" key={i}>
                    <input 
                    type="text" 
                    value={task}
                    onChange={(e)=>updateJobDescription(e,i)}
                    >
                    </input>
                    <button onClick={()=>deleteJobDescription(i)}>X</button>
                </div>
            ))}
            <button onClick={addJobDescription}>add description</button>
            <input 
            type="text"
            name="jobDescription"
            value={experience.jobDescription}
            onChange={onChange} />
           
            <div>
            <button onClick={handleSave}>save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
            
            <button onClick={handleDelete}>Delete</button>
            
        </div>
    )
   
    
}

