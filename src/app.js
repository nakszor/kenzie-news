export class API {
    static baseURL = " https://kenzie-news-api.herokuapp.com/api/news"

    static async getNews() {
        const response = await fetch(this.baseURL)
        const data = response.json()

        return data
    }
}