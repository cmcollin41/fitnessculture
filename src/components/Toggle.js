import React from 'react';

 
class Toggle extends React.Component {

  state = {
    on: false,
    active: false
  }

  toggle = (e) => {
    e.preventDefault();

    this.setState({
      on: !this.state.on,
      active: !this.state.active
    })
  }

  render() {

    const { render } = this.props
    return (
      <div>
        {render({
          on: this.state.on,
          active: this.state.active,
          toggle: this.toggle,
        })}
      </div>
    );
  }
}

export default Toggle