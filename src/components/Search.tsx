type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";
import { MagnifyingGlass } from "phosphor-react";
import classes from "./Search.module.css"

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if(e.key === "Enter") {
        loadUser(userName)
    } 
  }

  return (
    <div className={classes.search}>
      <h2>Digite um usuário</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={() => loadUser(userName)}>
          <MagnifyingGlass size={16}/>
        </button>
      </div>
    </div>
  );
};

export default Search;
