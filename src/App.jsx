import './assets/css/bootstrap.min.css';
import './assets/css/style.scss';
import './assets/css/responsive.scss';
import './assets/css/icofont.min.css';
import './assets/css/animate.min.css';
import React from 'react';
import AppRouter from './Routes';
import Preloader from './components/Shared/Preloader';

class App extends React.Component {
    state = {
        loading: true
    };

    componentDidMount(){
        this.demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    demoAsyncCall = () => {
        return new Promise((resolve) => setTimeout(() => resolve(), 2000));
    }

    render(){
        return (
            <React.Fragment>
                {this.state.loading ? <Preloader /> : ''}
                <AppRouter />
            </React.Fragment>
        );
    }
}

export default App;
