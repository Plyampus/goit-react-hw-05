import css from './ImageCard.module.css';

const ImageCard = ({ imgUrl, imgDescr, onClick }) => {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div className={css['image-card']}>
      <img src={imgUrl} alt={imgDescr} onClick={handleClick} />
    </div>
  );
};

export default ImageCard;
