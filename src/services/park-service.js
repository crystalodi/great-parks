import axios from "axios";
export class ParkService {
    static apiUrl = "https://developer.nps.gov/api/v1/parks"
    static apiKey = "2a3vaH2NexsDgQbyQMcBGq4juRV9TY23XrhyolQM"
    static async getParks() {
        let {data} = await axios.get(this.apiUrl, {
            params: {
                api_key: this.apiKey,
                stateCode: "CA",
                limit: 12
            }
        });
        const parks = data.data;
        parks.forEach(park => {
            const truncateActivities = [...park.activities].slice(0, 3);
            park.activities = truncateActivities;
        });
        return parks;
    }
}