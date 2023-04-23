import React from "react";
const Card = ({ pokemon, loading,infoPokemon}) => {
   // console.log(pokemon);
    return (
        <>
        {
    loading ? <h1>Loading...</h1> :
    pokemon.map((item) => {
      return (
    <>
<div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
<h2>{item.id}</h2>
    <img src={item.sprites.front_default} alt="" />
    <img className='card' src="https://images.wombo.art/generated/459b0abf-a2cd-4ac4-a727-3758aebf3e68/final.jpg?Expires=1689491762&Signature=JD8ePI857W4VPefxRP~tZCSX2a1NH~sVCq2zdwEXXE9vjA6sdSz1NXueCyhfOKfZkGKsg194~vy02Q1VhR79QdFWi~ajBx8lDbQ~hryXImP-GYS~njmvZJsEhEjGxEXz09EFeJ-XdEKEvHJyoOc8mAiVhEzTH3NXf3JoGc1MV1Q59qan4fsK-M4FfwNPZx3nZ-VPKmSZGkFbHp6x-V4Zo1hnPVWb5QNQfUHdtXqWkD5koAXdYXlFashdQqhVCt51OmaOL1KOcNlM3CJOhY~qLdA0rDwb0ZetzQpHB77rVX9JQBbpoxCooJ9uXHylKJQUnmn3yh8Us~QmRKi4VmM9YA__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="" />
    <h2>{item.name}</h2>
</div>
</>
)
})}

</>
)
}
export default Card;








