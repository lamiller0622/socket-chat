const React = require('react');

class Message extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = { message: '' };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleSubmit(event){
        event.PreventDefault();

        //calls a send message function not yet created
        this.props.sendMessage(this.state.message);

        //resets input field to ''
        this.setState( () => ({ message: ''}));

    }
    
    render () {
        return (
            <form className='message' onSubmit={this.handleSubmit}>

                <input 
                    className='messageInput'
                    placeholder='Type Your Message Here'
                    onChange ={this.handleChange}
                    required
                />
                

            </form>
        )
    }
}

module.exports = Message;
