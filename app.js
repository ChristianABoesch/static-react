/*
React course
https://react.dev/learn

Codecademy
https://www.codecademy.com/learn/react-101
*/


const Hello = () => (
    <div>
        <h1>Hello, React!</h1>
        <ol>
            <li>First item</li>
            <li>Second item</li>
            <li>Third item</li>
            <li>Fourth item</li>

            <li>Fifth item</li>
            <li>Sixth item</li>
            <li>Seventh item</li>
            <li>Eighth item</li>
        </ol>
    </div>
);

class Car extends React.Component {
    render() {
      return <h2>Hi, I am a Car! {this.props.name}</h2>;
    }
  }

class AA extends React.Component {
    render() {
      return <p>Hello, my name is {this.props.name} and I'm an alcoholic</p>;
    }
  }

  function MyButton() {
    const [clickCount, setClickCount] = React.useState(0);
    const [message, setMessage] = React.useState('');
  
    const handleClick = () => {
      const newClickCount = clickCount + 1;
      setClickCount(newClickCount);
      setMessage(`Click ${newClickCount}: You clicked me!`);
    };
  
    return (
      <div>
        <button onClick={handleClick}>
          {clickCount === 0 ? "I'm a button" : `Clicked ${clickCount} times`}
        </button>
        {message && <p>{message}</p>}
      </div>
    );
  }

  function ObjectOfSignificance() {
    const style = {
      backgroundColor: 'lightblue',
      padding: '10px 20px 10px 10px', // Adjusted padding
      borderRadius: '100px',
      fontFamily: 'Arial, sans-serif',
      fontSize: '8px',
      display: 'inline-block',

    };

    const afterStyle = {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '10px',
      backgroundColor: 'lightblue',
    };
    
    return (
      <p style={style}>
        Hello, pretend I'm something too
        <span style={afterStyle}></span>
      </p>
    );
  }

ReactDOM.render(
    <React.StrictMode>
        <Hello />
        <Car name='Beep, beep.' />
        <AA name='Christian B' />
        <MyButton />
        <Car name='Honk, honk.'/>
        <AA name='Brendan E' />
        <ObjectOfSignificance />

    </React.StrictMode>,
    document.getElementById('root')
);