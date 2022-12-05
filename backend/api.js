// const sdk = require('api')('@fsq-developer/v1.0#5ht27ul9n9ebnn');

// sdk.auth('fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=');
// sdk.placeSearch()
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));

async function placeSearch() {
try {
    const searchParams = new URLSearchParams({
        query: 'coffee',
        ll: '41.8781,-87.6298',
        open_now: 'true',
        sort: 'DISTANCE'
    });
    const results = await fetch(
        `https://api.foursquare.com/v3/places/search?${searchParams}`,
        {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=',
        }
        }
    );
    const data = await results.json();
    console.log(JSON.stringify(data.results))
    return data;
} catch (err) {
    console.error(err);
}
}
placeSearch()