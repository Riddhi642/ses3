import React from 'react'

const ListRender = () => {
    const emps=[
        { id:1 , name:"Riddhi" },
        { id:2 , name:"Siddhi" },
        { id:1 , name:"Nidhi" },
        { id:1 , name:"Samruddhi" },
    ];
  return (
    <div>
      <ul>
        {
            emps.map((emp)=>(
                <li key={emp.id}> 
                ID : {emp.id} - Name: {emp.name}
                </li>
            ))
        }
        
      </ul>
    </div>
  )
}

export default ListRender
