require('dotenv').config();
const axios = require('axios');
const BASE_ADDRESS = process.env.OW_API;

class OverwatchAPI {

    constructor(platform, region, battletag) {
        this.platform = platform;
        this.region = region;
        this.battletag = battletag;
    }

    sayHello() {
        console.log("Hello from OW Stats");
    }

    async getStats() {
        try {
            return await axios.get(`${BASE_ADDRESS}/${this.platform}/${this.region}/${this.battletag}/profile`);
        }
        catch(error) {
            console.log(error);
        }     
    }
}

module.exports = OverwatchAPI;