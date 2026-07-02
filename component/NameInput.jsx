export default function NameInput({name, nameInputChange}){
    return(
        <div>
        <input type="text" placeholder="enter your name..." value={name} onChange={nameInputChange} />
        <p>
            {name === "" ? "Please enter you name first!" : `Hello, This is your name : ${name}`}
        </p>
        </div>
    );
}