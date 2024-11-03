
export default function Education(
    {education,
         onChange,
          handleSave,
          handleCancel,
          handleDelete,
        }){

            
    return(
        <div  className="education-input">
            <label htmlFor="">
            School
            </label>
            <input 
            type="text"
            name="school"
            value={education.school}
            onChange={onChange} />
           
           <label htmlFor="">
           Degree
           </label>
            <input 
            type="text"
            name="degree"
            value={education.degree}
            onChange={onChange} />
           
          <label htmlFor="">
          Location
          </label>
             <input 
            type="text"
            name="location"
            value={education.location}
            onChange={onChange} />
        
           <label htmlFor="">
           Start date
           </label>
            <input 
            type="text"
            name="startDate"
            value={education.location}
            onChange={onChange} />
           
          <label htmlFor="">
          End date
          </label>
            <input 
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={onChange} />
          
           
            <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
   
    
}

