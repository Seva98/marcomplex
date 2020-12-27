const ReferenceCard = ({ img, title, subtitle, text }) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          <figure class="image is-4by3">
            <img src={img} alt="Placeholder" />
          </figure>
        </div>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{title}</p>
            <p class="subtitle is-4">{subtitle}</p>
          </div>
        </div>
        <div class="content">{text}</div>
      </div>
    </div>
  );
};

export default ReferenceCard;
