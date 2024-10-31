export default function PersonalInfo({personalInfo,onChange}){
    return(
        <div>
            
            <input 
            name="name"
            value={personalInfo.name}
            onChange={onChange}
            type="text" />
        </div>
    )
}