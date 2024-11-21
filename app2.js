const Frong = ({ messages }) => (
    <div>
        <h1>The "React" Frog</h1>
        <img src="/images/frog1.jpeg" width="200" alt="Frong image" />
        <ol>
            {messages.map((message, index) => (
                <li key={index}>{message}</li>
            ))}
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
    
    // Add this helper function
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const addNewMessage = () => {
        const subjects = ['react', 'components', 'props', 'state', 'hooks', 'jsx'];
        const actions = ['hopping', 'leaping', 'jumping', 'diving', 'swimming'];
        const adjectives = ['amazing', 'fantastic', 'wonderful', 'exciting', 'innovative'];
        const concepts = ['development', 'coding', 'programming', 'engineering', 'building'];

        const templates = [
            () => capitalizeFirstLetter(`${subjects[Math.floor(Math.random() * subjects.length)]} makes ${concepts[Math.floor(Math.random() * concepts.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]}!`),
            () => capitalizeFirstLetter(`${actions[Math.floor(Math.random() * actions.length)]} through the world of ${subjects[Math.floor(Math.random() * subjects.length)]}!`),
            () => capitalizeFirstLetter(`time for some ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${concepts[Math.floor(Math.random() * concepts.length)]}!`),
            () => capitalizeFirstLetter(`${subjects[Math.floor(Math.random() * subjects.length)]} is the future of ${concepts[Math.floor(Math.random() * concepts.length)]}!`),
            () => capitalizeFirstLetter(`keep ${actions[Math.floor(Math.random() * actions.length)]} forward with ${subjects[Math.floor(Math.random() * subjects.length)]}!`)
        ];

        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        const generatedMessage = randomTemplate();
        
        setMessages([...messages, generatedMessage]);
    };

    

    return (
        <div>
            <button onClick={addNewMessage}>Add Message!</button>
            <Frong messages={messages} />
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);