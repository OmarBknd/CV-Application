export default function DisplayResume({ educationList}){
   console.log('resume',educationList);
   
    
    return(
        <>
         <div  className="display-cv">
        {educationList.map((edu, index)=>( 

        
       
            <div key={index}>
          <p> school {edu.school}</p>
          <p> degree {edu.degree}</p>
          <p>Start Date: {edu.startDate}</p>
                   <p>End Date: {edu.endDate}</p>
                   </div>
       
    ))}
     </div>
    </>
    )
}