import React from 'react';

class Content extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body
    }

    setInterval(() => {
      this.update()
    }, 1000);
  }
  update(){
    this.setState({
      body: (new Date()).toString()
    });
  }
  render(){
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.state.body}</p>

        <button onClick={this.update.bind(this)}>
          Update
        </button>
      </div>
    );
  }
}

export default Content;
