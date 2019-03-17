import axios from 'axios'

const issSearch = async () => {
    const url = 'https://api.wheretheiss.at/v1/satellites/25544'
    const coords = await axios.get(url)
        .then(response => {
            return response.data
        }).catch(err => console.error(err)
        )
    return coords
}

export default issSearch