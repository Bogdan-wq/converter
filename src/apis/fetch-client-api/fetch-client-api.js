export default class FetchClient {
    _apiBase = 'https://openexchangerates.org/api/latest.json?app_id=af16e48f8112433d88be8f40dac3ca2c'

    getCourse = () => {
        return fetch(this._apiBase)
            .then((res) => res.json())
    }
}