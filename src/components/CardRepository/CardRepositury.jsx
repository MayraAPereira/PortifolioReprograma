import "./cardrepository.css";

const url = "https://api.github.com/users/mayraapereira/repos";

function CardRepository({ repo }) {
  return (
    <div className="repository-card">
      <h3 className="repository-title">{repo.name}</h3>
    
    </div>
  );
}

export default CardRepository;