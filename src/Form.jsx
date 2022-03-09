 import { useState } from "react";
function Form(){
    const [name,SetName] = useState("")
    const [tnc,setTnc] = useState(false)
    const [city,setCity] = useState("")
    function getFormData(e){
        console.log(name,tnc,city)
        e.preventDefault()
    }
    return(
        <form action="" method="get" className="App" onSubmit={getFormData}>
            <input type="text" placeholder="Ennter Your Name"  onChange={(e)=>SetName(e.target.value)} /><br /> <br />
            <select name="" id="" onChange={(e)=>{setCity(e.target.value)}}>
             <option value="Satara">Satara</option>    
             <option value="pune">Satara</option>    
             <option value="Karad">Satara</option>    
             <option value="Ubraj">Satara</option>    
            </select>     <br /> <br />
            <input type="checkbox" name="" id="" onChange={(e)=>{setTnc(e.target.checked)}}/> <span>Terms And Conditions</span>
            <button type="submit" onSubmit={getFormData}>submit</button>
        </form>
      
    )
}
export default Form