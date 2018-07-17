var React = require('react');

class Message extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.PreventDefault();
        var value = event.target.value;

        this.setState(function (){
            return{
                message: value
            }
        });

    }
    
    render () {
        return (
            <form className='message' onSubmit={this.handleSubmit}>

                <input 
                    className='messageInput'
                    placeholder='Type Your Message Here'
                />
                <button
                    className='messageButton'
                    type='submit'
                >Submit</button>

            </form>
        )
    }
}

module.exports = Message;