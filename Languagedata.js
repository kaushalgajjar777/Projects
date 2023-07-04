import React ,{createContext}from 'react'
import Languagechange from "./Languagechange";

const data = [
  {
    en: 'Hello World!',
    fr: 'Bonjour le monde!',
  },
  {
    en: 'My name is John Doe.', 
    fr: `Je m'appelle John Doe.`
  },
  {
    en: `Always find time for the things that make you happy to be alive.`,
    fr: `Trouvez toujours du temps pour les choses qui vous rendent heureux d'être en vie.`
  },
  {
    en: 'Stay hungry, Stay foolish.', 
    fr: `Rester affamé, rester idiot.`
  }
];

export const language = createContext();

function Languagedata() {
  return (
    <div>
      <language.Provider value={data}>
        <Languagechange />
      </language.Provider>
    </div>
  )
}

export default Languagedata