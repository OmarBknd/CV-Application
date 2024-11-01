
export default function Experience(
    {experience,
         onChange,
          handleSave,
          handleCancel,
          handleDelete,
        }){


    return(
        <div  className="educational-experience">
            company:
            <input 
            type="text"
            name="company"
            value={experience.company}
            onChange={onChange} />
            position:
            <input 
            type="text"
            name="position"
            value={experience.position}
            onChange={onChange} />
            location:
            <input 
            type="text"
            name="location"
            value={experience.location}
            onChange={onChange} />
            start date
            <input 
            type="text"
            name="startDate"
            value={experience.startDate}
            onChange={onChange} />
            end date
            <input 
            type="text"
            name="endDate"
            value={experience.endDate}
            onChange={onChange} />
            job description
            <input 
            type="text"
            name="jobDescription"
            value={experience.jobDescription}
            onChange={onChange} />
            <button onClick={handleSave}>save</button>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
   
    
}

