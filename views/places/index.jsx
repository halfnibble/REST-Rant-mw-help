const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={place.id} className="col-sm-6">
                <h2>
                <a href={`/places/${place.id}`}>
                    {place.name}
                </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Dine in or Get out</h1>
                <div className="row">
                    {placesFormatted}    
                </div>
            </main>
        </Def>
    )
}

module.exports = index
