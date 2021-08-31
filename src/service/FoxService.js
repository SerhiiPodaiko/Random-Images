class FoxService {
    _foxUrl = "https://randomfox.ca/floof/";

    async getRandomFox() {
        const response = await fetch(`${this._foxUrl}`);
        return await response.json();
    }
}

export default new FoxService();