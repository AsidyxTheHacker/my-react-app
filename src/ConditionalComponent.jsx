export default function ConditionalComponent() {
    const display = true;
    
    return(display ? <h1>Message 1</h1> : <h1>Message 2</h1>);
};