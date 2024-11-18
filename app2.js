const Frong = () => (
    <div>
        <h1>The "React" Frog</h1>
        <img src="/images/frog1.jpeg" width="200" alt="Frong image" />
        <ol>
            <li>Ribbit! Let's hop into some React components!</li>
            <li>Don't leap before you look! Always check your props!</li>
            <li>I'm not just a frog; I'm a functional component!</li>
            <li>State management? No problem! I've got it all under control!</li>
            <li>Keep your code clean, and your pond will stay clear!</li>
            <li>Frogs may jump, but good code should flow smoothly!</li>
            <li>Remember, every bug is just a feature waiting to be fixed!</li>
            <li>Let's render some fun together!</li>
            <li>Hop on over to the next challenge!</li>
            <li>In the world of React, every day is a new adventure!</li>
        </ol>
    </div>
);

const Button = () => (
    <button>Click me!</button>
);

const App = () => {
    const initialMessages = [
        "Ribbit! Let's hop into React components!",
        "Don't leap before you look! Always check your props!",
        "I'm not just a frog; I'm a functional component!",
        "State management? No problem! I've got it all under control!",
        "Keep your code clean, and your pond will stay clear!",
        "Frogs may jump, but good code should flow smoothly!",
        "Remember, every bug is just a feature waiting to be fixed!",
        "Let's render some fun together!",
        "Hop on over to the next challenge!",
        "In the world of React, every day is a new adventure!"
    ];

    const [messages, setMessages] = React.useState(initialMessages);
    
    const addNewMessage = () => {
        const newMessages = [
            "React makes me hoppy!",
            "Time to leap into action!",
            "Another lily pad of wisdom!",
            "Jumping through components with ease!",
            "Croaking with React joy!"
        ];
        const randomMessage = newMessages[Math.floor(Math.random() * newMessages.length)];
        setMessages([...messages, randomMessage]);
    };

    return (
        <div>
            <Frong messages={messages} />
            <button onClick={addNewMessage}>Add Message!</button>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);