function eachElements(obj)
{
    return (
    <div className="element" key={obj}>
        <h2>{obj.name}</h2> 
        <h4>Age : {obj.age}</h4> 
        <h4>Hobbies : </h4> 
        <div className="hobbieslist">
        <ul>
            {obj.hobbies.map((hobbies) => ( 

                 <li key={hobbies}> 
                 {" "} 
                 <h4> {hobbies} </h4> 
                 
                 </li>
        ))}
        </ul>
    </div>
       
        <h4>Bio : {obj.bio}</h4>
    </div>
    );
}

export default eachElements;
