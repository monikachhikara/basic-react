import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:"Dummy",
            location:"Default",
            
        }
    }

   async componentDidMount(){

        const data = await fetch("https://api.github.com/users/monikachhikara");
        const jsonData = await data.json();

        this.setState({
            userInfo:jsonData
        });

        console.log(jsonData);

    }

   
    render(){
        const {name, avatar_url} = this.state.userInfo;

        return (
            <div className='user-card'>
                <img src={avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location:</h3>
                <h4>Contact: monika91malik@gmail.com</h4>
            </div>
        )
    }
} 

export default UserClass;