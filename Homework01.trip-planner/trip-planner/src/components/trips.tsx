function Trips(){
    const trips = ["Los Angeles", "Dubai", "Abu Dhabi"]

    return (
        <div>
            <h2>Destinations for the trip</h2>
            <ol>
                {trips.map((trip, oneTrip) => (<li key={oneTrip}>{trip}</li>) )}
            </ol>
        </div>
    )
};
export default Trips;