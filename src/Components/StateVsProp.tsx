function StateVsProp({defaultName, changeName, setChangeName}:any) {

    return (
      <div className="">
        <input placeholder="Enter any name" value={changeName} onChange={(e)=>{setChangeName(e.target.value) }}/>
        <p>I am {changeName}</p>
      </div>
    );
  }
  
  export default StateVsProp;