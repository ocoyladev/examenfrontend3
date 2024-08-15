function Card({name,color}) {
  return (
    <div>
      <p>Hola {name}!</p>
      <p>Sabemos que tu color favorito es:</p>
      <div>
        <p>#{color}</p>
      </div>
    </div>
  );
}

export default Card;
