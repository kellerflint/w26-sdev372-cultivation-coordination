import React from 'react'

export default function Cell({ plant }) {
    const [seed, updateSeed] = React.useState(plant)

    console.log(seed)
    
    return (
        <>
            <p>{seed}</p>
            <button onClick = {() => updateSeed(plant)}>Plant Here...</button>
        </>
    )
}