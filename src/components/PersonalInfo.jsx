export default function PersonalInfo({personalInfo,onChange}){
    return(
        <div>
            Name
            <input 
            name="name"
            value={personalInfo.name}
            onChange={onChange}
            type="text" />
            Email
             <input 
            name="email"
            value={personalInfo.email}
            onChange={onChange}
            type="text" />
            Phone number
             <input 
            name="phoneNumber"
            value={personalInfo.phoneNumber}
            onChange={onChange}
            type="text" />
             Location(city,state)
             <input 
            name="phoneNumber"
            value={personalInfo.location}
            onChange={onChange}
            type="text" />
        </div>
    )
}