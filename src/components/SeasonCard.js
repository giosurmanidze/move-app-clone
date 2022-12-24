import './styles/Seasions.css'

const SeasonCard = ({ season }) => {
  return (
    <div className="season__card">
      <img src={season.img} alt={season.nmae} />
      <div className="text__img">
        <p className='title'>{season.name}</p>
        <p className='seasons__detail'>
          სეზონი {season.season} სერია {season.series}
        </p>
      </div>
    </div>
  );
};

export default SeasonCard;
