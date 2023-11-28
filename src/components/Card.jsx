
function Card(props) {

  return (
        <div className={props.className}>
          <h2>{props.h2}</h2>
          <p>{props.body}</p>
        </div>
  );
}

export default Card;