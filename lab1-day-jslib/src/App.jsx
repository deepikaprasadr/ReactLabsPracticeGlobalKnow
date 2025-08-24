import React from 'react';
import dayjs from 'dayjs';


 const App=()=>{
  
  const now=dayjs();
  
  const formatted=now.format('MMMM D,YYYY h:mm A');//Format date
  const adddays=now.add(7,'day').format('MMMM D, YYYY h:mm A');//add 7 days
  console.log(adddays)
  const subtract1mon=now.subtract(1,'month').format('MMMM D, YYYY h:mm A');//sub 1 month
   console.log(subtract1mon)
console.log(now.add(7,'day'));//object type
  return (
    <div>
      <p> 
        
        Current Date and Time:{formatted}</p>
          <p>  {adddays}</p>
           <p>  {subtract1mon}</p> {/* */}
    </div>
  );
};

export default App
