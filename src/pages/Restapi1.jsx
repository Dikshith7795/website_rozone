import { useEffect,useState} from 'react'
import Axios from 'axios'


function Restapi1() {
    const [data,setDate] = useState([])
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log("getting from", res.data)
            setDate(res.data) 
        }).catch(err => console.log("error"))
    }, [])
    const arr = data.map((data,index) => {
        return (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>
        )
    })
    return (
        <div className='App'>
            <table>
            <tr>
                <th>id</th>
                
            </tr>
                
            </table>
            
                {arr}
              
            
        </div>  
    )
}

export default Restapi1