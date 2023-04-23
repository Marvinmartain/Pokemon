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
                                <img className='card' src="https://images.wombo.art/generated/29e72828-4f9e-41fc-8864-6550ad3259be/final.jpg?Expires=1689431182&Signature=STnASdcykmmdccovmfiMgVpJ5IKbJ8rdWrqOedzopCpt7zP-CHqr5GzttQ~Hdps05zx0Hovg~PLmbcBa9fvzh0oFhd6SkwZUUtDF0-wtnEXHiNk7TD8fUex5rxowQHYjwBmgmIbAxWaUKBuowZzyyVogaJQsqYfyOuBhF4hs1nptHfatZcP~scgAm9GuZiaoR~KNrvR-dVemS8oclTHMvwgkvwS2dlNqP-WPP~~RtCjmg5bMS~pG5T-G2Ag9-3njZPvAcT6kaUmBMCbDnJhaY2eXtI3pNEBwVuRpHrULoe6KCJHBobWphfo~txsSEbYOmSe30WB5VDqpNImcEMKnWQ__&Key-Pair-Id=K1ZXCNMC55M2IL" alt="" />
                                <h2>{item.name}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
}
export default Card;








