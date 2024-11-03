export default function PersonalInfo({personalInfo,onChange}){
    return(
        <div className="personal-info-input">
            <div>
            <label htmlFor="">
            Name
            </label>
            <input 
            name="name"
            value={personalInfo.name}
            onChange={onChange}
            type="text" />
            
            </div>
            <label htmlFor="">
            Email</label>
             <input 
            name="email"
            value={personalInfo.email}
            onChange={onChange}
            type="text" />
            
            <label htmlFor="">
            Phone number
            </label>
             <input 
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={onChange}
            type="text" />
            
           <label htmlFor="">
           Location(city,state)
           </label>
             <input 
            name="phoneNumber"
            value={personalInfo.location}
            onChange={onChange}
            type="text" />
           
             
        </div>
    )
}