import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
    console.log("생성");
  }

  render(){
    return (
        <h1>{this.props.title}</h1>
    );
  }
}

export default Header;
