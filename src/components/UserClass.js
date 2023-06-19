import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count:0,
        };
    }
    render(){
        const {count} = this.state;
        return (
            <div className='user-card'>
                <div className='count' >
                    <h1>Count: {count}</h1>
                    <button onClick={()=>{this.setState({
                        count:count+1,
                    })}}>Count Increase</button>
                </div>
                <h2>Name:{this.props.name}</h2>
                <h3>Location:Earth</h3>
                <h4>Contact: monika91malik@gmail.com</h4>
            </div>
        )
    }
} 

export default UserClass;