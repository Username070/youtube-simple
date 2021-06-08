# youtube-simple
Simple YouTube API wrapper made in Node.js to help you interact with YouTube API.

## Prerequisites
- Youtube API key.
- NPM.

## Installation
- Get API key at: https://console.cloud.google.com/apis/credentials
- Download this NPM package.
```
npm i youtube-simple
```

## Examples

#### Search for "Pedro Pascal crying".
```js
const YouTubeAPI = require(youtube-simple);

newRequest.SearchVideoList("snippet", "Pedro Pascal crying")
     .then(function(data) {
         console.log(data);
     })
     .catch(console.error)
```

#### Retrieve information from channel going by "Pewdiepie" name.
```js
const YouTubeAPI = require(youtube-simple);

newRequest.getChannelsListByName("snippet,statistics", "Pewdiepie")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### Retrieve comments from video going by id "dQw4w9WgXcQ".
```js
const YouTubeAPI = require(youtube-simple);

newRequest.getCommentThreadsListByVideoId("snippet", "dQw4w9WgXcQ")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
