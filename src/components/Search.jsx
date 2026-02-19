export default function Search() {
    return (
        <div>
            <input type="text" placeholder="Search for a plant" />
            <button>Search</button>
        </div>
    )
}
//Search database for plants that match the search query
//if no plants are found call Api search function to get plants from Perenual API
//we get info that matches (if from api add to db) and then display the plants in the search results
