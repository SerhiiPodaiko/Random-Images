class DogService {
    _dogUrl = "https://dog.ceo/api/breeds/image/random";

    async getRandomDog() {
        const response = await fetch(`${this._dogUrl}`);
        return await response.json();
    }
}

export default new DogService();