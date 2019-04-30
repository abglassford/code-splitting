import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    route: 'Page1',
  }

  importComponent = () => import(`./components/${this.state.route}`);

  onRouteChange = route => () => {
    this.setState({ route })
  }

  render() {
    const LazyPage = React.lazy(this.importComponent);

    return (
      <React.Suspense fallback={<div>Loading</div>}>
        <LazyPage
          route={this.state.route}
          onRouteChange={this.onRouteChange}
        />
      </React.Suspense>
    );
  }
}

export default App;
