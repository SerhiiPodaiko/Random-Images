class CatService {
    _catUrl = "https://cataas.com";

    buildUrl(path) {
        return this._catUrl + (path ? path : "");
    }

   async getRandomCat() {
        const response = await fetch(`${this._catUrl}/cat?json=true`);
        return  await response.json();
    }
}

export default new CatService();