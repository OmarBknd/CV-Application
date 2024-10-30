export default function DisplayResume({ educationList}){
   console.log('resume',educationList);
   
    
    return(
        <>
         <div  className="display-cv">
        {educationList.map((edu, index)=>( 

        
       
            <div key={index}>
          <p>  {edu.school}</p>
          <p>  {edu.degree}</p>
          <p> {edu.startDate}</p>
                   <p> {edu.endDate}</p>
                   </div>
       
    ))}
     </div>
    </>
    )
}