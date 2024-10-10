import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function formatDate(obj){
    return obj.toLocaleString();    
}

const author1 = {
    avatarUrl: "logo512.png", name: "Yury"
}

const author2 = {
    avatarUrl: "logo512.png", name: "Ivan"
    
}

const comments = [{
    author: author1, date: new Date(), text: 'Sample comment'    
},{
    author: author2, date: new Date(), text: 'Sample comment 2'    
},{
    author: author1, date: new Date(), text: 'Sample comment 3'    
},{
    author: author2, date: new Date(), text: 'Sample comment 4'    
},
]

class Avatar extends React.Component {
    render(){
        return <img className="Avatar"
                    scr={this.props.author.avatarUrl}
                    alt={this.props.author.name}/>
        
    } 
    
}

class UserInfo extends React.Component {
    render(){
        if(this.props.author){
            return <div className="UserInfo">
                <Avatar author={this.props.author}/>
                <div className="UserInfo-name">{this.props.author.name}</div>
            </div>;
        }
        else{
            return <div className="UserInfo">Unknown</div>
        }
    }
    
}

class Comment extends React.Component {
    render(){
        return <div className="Comment">
            <UserInfo author={this.props.author}/>
            <div className="Comment-text">{this.props.text}</div>
            <div className="Comment-data">{formatDate(this.props.date)}</div>
        </div>;
        
    }   
}

const elment = comments.map((x) => <Comment author={x.author} date={x.date} text={x.text}/>);
root.render(<div>{element}</div>);

reportWebVitals();