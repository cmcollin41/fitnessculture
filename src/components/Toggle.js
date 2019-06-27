import React from 'react';
import { Link } from 'gatsby';

 
class Toggle extends React.Component {

  state = {
    on: false
  }

  toggle = (e) => {
    e.preventDefault();

    this.setState({
      on: !this.state.on
    })
  }




  render() {

    const { render } = this.props
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}

export default Toggle