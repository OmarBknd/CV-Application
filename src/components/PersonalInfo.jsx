export default function PersonalInfo({personalInfo,onChange}){
    return(
        <div>
            <h2>Personal information</h2>
            <input 
            name="name"
            value={personalInfo.name}
            onChange={onChange}
            type="text" />
        </div>
    )
}