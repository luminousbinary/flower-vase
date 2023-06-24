export const Header: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-7">
        <h1>Save your world a Flora at a time</h1>
        <button type="button" className="but btn btn-dark btn-lg">
          <i className="fa-solid fa-feather-pointed"></i> Join Now
        </button>
        <button type="button" className="but btn btn-outline-light btn-lg">
          <i className="fa-solid fa-money-check-dollar"></i> Donate Now
        </button>
      </div>
      <div className="col-lg-5">
        <img
          className="head-img"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5ee3685c-acf5-40d4-a862-ba3acbb1afc5/d6qladc-e9623ad1-2248-4a97-8c49-8093f369a80d.png/v1/fill/w_900,h_826,strp/dark_pink_flower_stock_by_njakstudio_d6qladc-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODI2IiwicGF0aCI6IlwvZlwvNWVlMzY4NWMtYWNmNS00MGQ0LWE4NjItYmEzYWNiYjFhZmM1XC9kNnFsYWRjLWU5NjIzYWQxLTIyNDgtNGE5Ny04YzQ5LTgwOTNmMzY5YTgwZC5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.n3rB7bjoQA87QDTD7kRitChYY8CqbNbgoRhEH3Hqioc"
          alt=""
        />
      </div>
    </div>
  );
};
