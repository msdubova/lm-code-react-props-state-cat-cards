interface CatCardProps {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
}

const CatCard: React.FC<CatCardProps> = (props) => {
  // console.log("CatCard to App, come in App? Do you read me?", props)
  return (
    <div className="card">
      <h3 className="card__text card__header">{props.name}</h3>
      <p className="card__text">Species: {props.species}</p>
      <p className="card__text">Favourite Food(s): {props.favFoods}</p>
      <p className="card__text">Birth Year: {props.birthYear}</p>
    </div>
  );
};
export default CatCard;
