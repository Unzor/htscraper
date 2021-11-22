class HTScraper {
    constructor() {
        return {
            scrape: function(paramURL) {
                return new Promise((resolve, reject) => {
                    var baseUrl = "https://cors-bypass-app.herokuapp.com/get?url=";
                    var url = baseUrl + paramURL;
                    fetch(url)
                        .then(response => response.text())
                        .then(response => {
                            resolve(new DOMParser().parseFromString(response, 'text/html'));
                        })
                });
            }
        }
    }
}
