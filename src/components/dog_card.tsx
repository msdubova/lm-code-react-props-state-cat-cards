
interface DogCardProps {
  name: string;
  species: string;
  favFoods: string[];
  birthYear: number;
  dogIndex: number;
}
const DogCard: React.FC<DogCardProps> = (props) => {
  const { name, species, favFoods, birthYear, dogIndex } = props;
  return (
    <div className="card card--dog">
      <h3 className="card__text card__header">{name}</h3>

      <p className="card__text">Species: {species}</p>
      <p className="card__text">Favourite Food(s): {favFoods}</p>
      <p className="card__text">Birth Year: {birthYear}</p>
    </div>
  );
};

export default DogCard;
