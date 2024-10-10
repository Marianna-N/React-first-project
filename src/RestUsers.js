import React, {useEffect,useState} from 'react';
import {Alert,ListGroup} from "react-bootstrap";

function RestUsers(props) {
    
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState (null);
    
//    const url = 'https://jsonplaceholder.typicode.com/users';
    
    useEffect(() => {
        setLoading(true)
        
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({title:'Post title'})
        };
        fetch('https://jsonplaceholder.typicode.com/post/1', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
        })
        
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
               if(response.ok){
                   return response.json()
               } 
               throw new Error(response.status +":"+ response.statusMessage)                    
            })
            .then(data => {
                setData(data)
                setLoading(false)
                setError(null)
            })
            .catch (error => setError(error.message))
            .finally(()=>setLoading(false))
    },[]);
    
   // return data.map((x,i) => (<div className="User-Info" key={x.id}>{i+1}.{x.name}</div>))
   
    return <div>
    {loading && <div>Идёт загрузка...</div>}
    {error && (<Alert variant="danger">{'Ошибка при загрузке REST - ${error}'}</Alert>)}
    {data && data.length && 
            <ListGroup>{data.map((x) => <ListGroup.Item key={x.id}>{x.name}</ListGroup.Item>)}</ListGroup>}
    </div>;
    
    
}


export default RestUsers;