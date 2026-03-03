function BookCard({ titre, auteur, categorie }) {
  return (
    <div className="card">
      <h3>Livre</h3>
      <p>Titre : {titre}</p>
      <p>Auteur : {auteur}</p>
      <p>Catégorie : {categorie}</p>
    </div>
  )
}

export default BookCard