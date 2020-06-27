# React

Useful References: https://reactjs.org/docs/getting-started.html

Useful Resources:

- More on useEffect(): https://reactjs.org/docs/hooks-effect.html

- State & Lifecycle: https://reactjs.org/docs/state-and-lifecycle.html

- PropTypes: https://reactjs.org/docs/typechecking-with-proptypes.html

- Higher Order Components: https://reactjs.org/docs/higher-order-components.html

- Refs: https://reactjs.org/docs/refs-and-the-dom.html

---------------Notes---------------:
- Routing
> In order to have user navigate between pages in terminal type:

> npm install --save react-router-dom
```
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={HomePage} exact /> {/*Route takes two main props, <Path (url component will be rendered) Component (specifies actual component) (exact, to make sure url matches)> */}
      </div>
    </Router>
  );
}
```

---------------Props---------------:
```
"Props is short for properties and they are used to pass data between React components. 
 React’s data flow between components is uni-directional (from parent to child only)."
 
class ParentComponent extends Component {    
    render() {    
        return (        
            <ChildComponent name="First Child" />    
        );  
    }
}

const ChildComponent = (props) => {    
    return <p>{props.name}</p>; 
};
```
---------------State---------------:
```
"React has another special built-in object called state, which allows components to create and manage their own data. 
So unlike props, components cannot pass data with state, but they can create and manage it internally."

class Test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}

"State should not be modified directly, but it can be modified with a special method called setState()"

this.state.id = “2020”; // wrong

this.setState({         // correct  
    id: "2020"
});
```
---------------Conditional Rendering---------------:
```
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```
---------------Inline If with Logical && Operator---------------:
```
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```
---------------Inline If-Else with Conditional Operator---------------:
```
render() {                                                                  render() {
  const isLoggedIn = this.state.isLoggedIn;                                     const isLoggedIn = this.state.isLoggedIn;
  return (                                                                      return (
    <div>                                                                           <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.                  {isLoggedIn
    </div>                                                                                  ? <LogoutButton onClick={this.handleLogoutClick} />
  );                                                                                        : <LoginButton onClick={this.handleLoginClick} />
}                                                                                       }                                         
                                                                                    </div>                                     
                                                                                );
                                                                            }                                                                          
```
