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
    <img className='card' src="https://images.wombo.art/generated/feb4d43e-2f26-4974-bfbf-a413da47d934/final.jpg?Expires=1689490902&Signature=S-qg7DEo0d1JSqs8fgUqSXMyD-cb9CUAHt2BJzrObeaaoMPgNb0Uv~ize~Z3xHcQlcx7Fwgs-BsGrcyVWOjDtxZ1q9YOo-EP0jM~8o9E5kWciFq9UikPzX2v8DRydfFVEF8OE4wQBwowsSdbq-N~nsL0-oGZ4PBGLWFpCMy8c0qKArONAIO2DZ3dDgK66mdOq5ohNMVud54Yv8maGEJxJcZDdynx5Y5kSxAOUUe7H2w0MS2WeLElTvbD0AvN~wYfS6kfFU2z3xOEfxy44RB3Y4WYA~0JAci7FtjcQNVmakT5KjZq2-eNMVn7Pw655wWCi~sd-ZKPH4nU8RSFoILWcg__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="" />
    <h2>{item.name}</h2>
</div>
</>
)
})}

</>
)
}
export default Card;








