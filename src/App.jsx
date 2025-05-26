import React, {useState} from 'react';
import './App.css';

function App() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [comments, setComments] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    function handleSubmit() {
        event.preventDefault();
        return console.log({name, age, comments, newsletter})
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend><h2>Gegevens</h2></legend>
                <label htmlFor="name-details">
                    Naam:
                    <input
                        type="text"
                        id="name-details"
                        name="name"
                        placeholder=""
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="age-details">
                    Leeftijd:
                    <input
                        type="number"
                        id="age-details"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </label>

            </fieldset>
            <fieldset>
                <legend><h2>Jouw review</h2></legend>
                <label htmlFor="form-comments">
                    Opmerkingen:
                    <textarea
                        id="form-comments"
                        name="form-comments"
                        placeholder="Wat vond je van het recept?"
                        rows="4"
                        cols="40"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </label>
                <label htmlFor="newsletter-checkbox">
                    <input
                        type="checkbox"
                        id="newsletter-checkbox"
                        name="newsletter-checkbox"
                        checked={newsletter}
                        onChange={() => setNewsletter(!newsletter)}

                    />
                    Ik schrijf me in voor de nieuwsbrief
                </label>
                <button type="submit">
                    Versturen
                </button>
            </fieldset>
        </form>
    );
}

export default App;
