
export default function Education(
    {education,
         onChange,
          handleSave,
          handleCancel,
          handleDelete,
        }){


    return(
        <div  className="educational-experience">
            school:
            <input 
            type="text"
            name="school"
            value={education.school}
            onChange={onChange} />
            degree:
            <input 
            type="text"
            name="degree"
            value={education.degree}
            onChange={onChange} />
            start date
            <input 
            type="text"
            name="startDate"
            value={education.startDate}
            onChange={onChange} />
            end date
            <input 
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={onChange} />
            <button onClick={handleSave}>save</button>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
   
    
}

