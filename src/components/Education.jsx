
export default function Education(
    {education,
         onChange,
          handleSave,
          handleCancel,
          handleDelete,
        }){

  function handleSubmit(e){
    e.preventDefault()
    handleSave()
  }    
    return(
      <form action="" onSubmit={handleSubmit}>
        <div  className="education-input">
            <label htmlFor="">
            School
            </label>
            <input 
            required
            type="text"
            name="school"
            value={education.school}
            onChange={onChange} />
           
           <label htmlFor="">
           Degree
           </label>
            <input 
            required
            type="text"
            name="degree"
            value={education.degree}
            onChange={onChange} />
           
          <label htmlFor="">
          Location
          </label>
             <input 
             required
            type="text"
            name="location"
            value={education.location}
            onChange={onChange} />
        
           <label htmlFor="">
           Start date
           </label>
            <input 
            required
            type="text"
            name="startDate"
            value={education.startDate}
            onChange={onChange} />
           
          <label htmlFor="">
          End date
          </label>
            <input 
            required
            type="text"
            name="endDate"
            value={education.endDate}
            onChange={onChange} />
          
           
            <div>
            <button type="submit">Save</button>
            <button onClick={handleCancel}>Cancel</button>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </form>
    )
   
    
}

