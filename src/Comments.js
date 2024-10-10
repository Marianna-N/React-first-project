
function Comments() {
    
    let user = [{
        name: 'Mary',
        lastName: 'N',
        text:'comment'
    },
    {
        name: 'Mary1',
        lastName: 'N1',
        text:'comment1'
    },
    {
        name: 'Mary2',
        lastName: 'N2',
        text:'comment2'
    },
    {
        name: 'Mary3',
        lastName: 'N3',
        text:'comment3'
    }
    ];
    
    
    
//    function formatName(user){
//        return 
//        
//    }
    
    function Author(props){
        return (
             <p>{props.user.name} {props.user.lastName}</p>               
        );
    }
    
    function CommentDate(){
        return (
             <p>{new Date().toLocaleTimeString()}</p>               
        );
    }
    
    function Avatar(){
        return (
            <img src="logo512.png" className="App-logo" alt="logo" />               
        );
    }
    
    function Comment(props1){
        return (
            <textarea>{props1.user.text}</textarea>               
        );
    }
    
    function Element(props){
        return (
            <div>
                <Avatar/>
                <Author user={props.user}/>
                <CommentDate/>
                <Comment user={props.user}/>
            </div>              
        );
        
    }
    
   const page = user.map((x) => <Element user={x.user}/>);
            
    return (
            page
  
    );
    
}

export default Comments;
    