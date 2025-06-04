import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
  message: string;
};

export class AppMessage extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
    message: 'Nothing was pressed yet',
  };

  handleDocumenPressButton = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
      message: `The last pressed key is [${event.key}]`,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleDocumenPressButton);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumenPressButton);
  }

  render() {
    return <p className="App__message">{this.state.message}</p>;
  }
}
