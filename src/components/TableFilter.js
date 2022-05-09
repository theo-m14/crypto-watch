const TableFilter = () => {
  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input type="checkbox" id="stableCoin" defaultValue="true" />
          <label htmlFor="stableCoin">Avec Stable Coin</label>
        </div>

        <div className="no-list-btn">
          <p>Aucune liste</p>
        </div>
        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="/assets/star-full.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TableFilter;
