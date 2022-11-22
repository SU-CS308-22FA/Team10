
import { useState, useEffect } from "react";


const defaultSelectValue = "Choose your favorite team";

  const SelectTeam = () => {
    const [selected, setSelected] = useState(defaultSelectValue)

    return (
      <>
        <label htmlFor="team">Teams</label>{' '}
        <select id="team"
              name="team"
              defaultValue={selected}
              style={{ color: selected === defaultSelectValue ? "gray" : "black" }}
              onChange={e => setSelected(e.target.value)}>
              <option value="Fenerbahçe"> Fenerbahçe</option>
              <option value="Galatasaray">Galatasaray</option>
              <option value="Beşiktaş"> Beşiktaş</option>
            </select>
        <h2>Selected: {selected}</h2>
      </>
    )
  }

  export default SelectTeam;