export default function NameComponent({ nameInput, onInputChange }) {

    return (
        <div>
            <input type="text" placeholder="Name..." value={nameInput} onChange={onInputChange}/>

            <p>{nameInput === "" ? "Please in put your name" : `Hello, ${nameInput}`}</p>
        </div>
    );
}