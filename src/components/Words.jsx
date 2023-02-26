import { useState } from "react"
import axios from "axios";
import "./Words.css"

export default function GetMeaning() {


    const [searchWord, setSearchWord] = useState([])
    const [data, setData] = useState("");

    const handleSearch = (word) => {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then((response) => {
                setData(response.data)
            })
    }




    return (
        <div className="words-container">
            <h1 className="header">Free Dictionary</h1>
            <input type="text" placeholder="Search..." onChange={(e) => setSearchWord(e.target.value)} />
            <button type="button" onClick={() => handleSearch(searchWord)}>Search...</button>
            {data.length ? 
            <ul className="word-list">
                 {
                data.map((item, index) => (
                    <li>
                        <p className="list">Word:  {item.word}</p>
                        <p className="list">Phonetic:  {item.phonetic}</p>
                        {item.meanings.map(item => <p className="list">Meaning:  {item.definitions[0].definition}</p>)}
                    </li>
                ))
            }
            </ul> : null
        }

        </div>
    ) 
}

