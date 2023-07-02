import React from 'react';
import "./App.css"
import CalendarComponent from '../CalendarComponent/CalendarComponent';

const App = () => {
    return (
        <div data-testid="App id" className="main-app">
            <CalendarComponent />
        </div>
    );
}

export default App;
