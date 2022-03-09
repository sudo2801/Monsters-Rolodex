import { useState,useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';


const Classss = ()=>{
   
    const  [searchField, setSearchField] = useState('')
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then((user)=>setMonsters(user))
    }, []);

    useEffect(() => {
        const newFilterdMonsters= monsters.filter((monster)=>{

         return monster.name.toLocaleLowerCase().includes(searchField)

        });
            setFilteredMonsters(newFilterdMonsters)
        
    }, [monsters,searchField]);
   
        const onSearchChange = (event)=>{
                //console.log(event.target.value)
                const searchFieldString = event.target.value.toLocaleLowerCase();
                setSearchField(searchFieldString)
            }
        
    return(
        <div>
        <h1 className="app-title">Monster Reload</h1>
         <SearchBox 
         oncChangeHandler={onSearchChange} 
         placeholder={"search monster"}
         className="monster-serach-box"
         />
        <CardList  monsters ={filteredMonsters} />
        </div>
    )
       
   
}

// class Classss extends Component{
//     constructor() {
//         super();
//         this.state = {
//             monsters:[],
//             searchField:''
//         }
            
//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response)=>response.json())
//         .then((user)=>{this.setState(() =>{
//             return {monsters:user}
//         },
//         )})
//     }

//     //for optimization we write here 
//     onSearchChange = (event)=>{
//         //console.log(event.target.value)
//         const searchField = event.target.value.toLocaleLowerCase();
      
//        this.setState(()=>{
//           return { searchField }
//        })
//     }

//   render(){
//       //console.log(this)
//     const { monsters,searchField }= this.state
//     const { onSearchChange } = this;


//     const filetName= monsters.filter((monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchField)
//      });



//       return (
//           <div>

//               <h1 className="app-title">Monster Reload</h1>
//                <SearchBox 
//                oncChangeHandler={onSearchChange} 
//                placeholder={"search monster"}
//                className="monster-serach-box"
//                />
//               <CardList  monsters ={filetName} />
//           </div>
//       )
//   }
    
// }

export default Classss 