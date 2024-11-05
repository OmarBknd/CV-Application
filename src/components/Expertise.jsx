export default function Expertise({expertise,handleChange}){
    return(
        <div className="expertise-input">
            <label htmlFor="">
                Skills
            </label>
            <input
            name="skill"
            value={expertise.skill}
            onChange={handleChange} 
            type="text"
             />
             <label htmlFor="">
                Interests
             </label>
             <input
            name="interest"
            value={expertise.interest}
            onChange={handleChange} 
            type="text"
             />

        </div>
    )
}