import _ from "lodash";
import { useCallback, useEffect, useState } from "react";
// Image
import searchIcon from "../../images/search-icon.svg";
import styles from "./SearchBar.module.scss";

// Task: Build search functionality that filters the list while typing

type Props = {
  setSearchTerm: (newState: string) => void;
};

const SearchBar = ({ setSearchTerm }: Props) => {
  const [state, setState] = useState("");

  useEffect(() => {
    debouncedSearch(state);
  }, [state]);

  const debouncedSearch = useCallback(
    _.debounce((state) => {
      setSearchTerm(state);
    }, 1000),
    [state]
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </div>
    </div>
  );
};

export default SearchBar;
