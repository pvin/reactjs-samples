import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                Hello World!!!
            </div>
    );
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>

        );
    }
}

class Content extends React.Component{
    render() {
        return (
            <div>
                <h1>Content</h1>
                <p>text.....</p>
            </div>

        );
    }
}


export {App, Header, Content}

