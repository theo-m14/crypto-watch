import { useEffect, useState } from "react";
import { setStableState } from "../actions/stable.action";
import { setListDisplay } from "../actions/list.action";
import { useDispatch } from "react-redux";

const TableFilter = () => {
  const [showStable, setShowStable] = useState(true);
  const [favList, setFavList] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(favList));
  }, [showStable, favList]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultValue="true"
            onClick={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec Stable Coin" : "Sans Stable Coin"}
          </label>
        </div>

        <div
          className={favList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setFavList(false)}
        >
          <p>Aucune liste</p>
        </div>
        <div
          className={favList ? "fav-list active" : "fav-list "}
          onClick={() => setFavList(true)}
        >
          <p>Liste des favoris</p>
          <img
            src={favList ? "/assets/star-full.svg" : "/assets/star-empty.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
