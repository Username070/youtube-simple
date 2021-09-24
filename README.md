```diff
- This package is no longer in the Node.js and i don't recommend using it because of it's terrible structure
```
# youtube-simple
Simple YouTube API wrapper made in Node.js to help you interact with YouTube API.

## Prerequisites
- Youtube API key.
- NPM.

## Installation
- Get API key [here](https://console.cloud.google.com/apis/credentials).
- Download this NPM package.
```
npm i youtube-simple
```

## Methods
<details>
    <summary>Captions</summary>

#### By videoId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getCaptions("snippet", "M7FIvfx5J10")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>Channels</summary>

#### By channelName
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getChannelsByName("snippet", "Pewdiepie")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By channelId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getChannelById("snippet", "UC-lHJZR3Gqxm24_Vd_AJ5Yw")
    .then(function(data) {
        console.log(data);
     })
    .catch(console.error)
```
</details>

<details>
    <summary>ChannelSections</summary>

#### By channelId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getChannelSectionsByChannelId("snippet", "UC-lHJZR3Gqxm24_Vd_AJ5Yw")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getChannelSectionsById("snippet", "UCUf53DHwoQw4SvETXZQ2Tmg.XgM4c0oGu94")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>Comments</summary>

#### By resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getCommentsById("snippet", "UgzDE2tasfmrYLyNkGt4AaABAg")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By parentId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

newRequest.getCommentsByParentId("snippet", "UgzDE2tasfmrYLyNkGt4AaABAg")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>CommentThreads</summary>

#### By allThreadsRelatedToChannelId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getCommentThreadsByATRTCI("snippet", "UCAuUUnT6oDeKwE6v1NGQxug")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By channelId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.getCommentThreadsByChannelId("snippet", "UCAuUUnT6oDeKwE6v1NGQxug")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By videoId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getCommentThreadsByVideoId("snippet", "dQw4w9WgXcQ")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>I18nLanguages</summary>

#### By resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.GetI18nLanguages("snippet")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>I18nRegions</summary>

```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.GetI18nRegions("snippet")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>PlaylistItems</summary>

#### By playlistId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getPlaylistItemsByPlaylistId("snippet,contentDetails", "PLBCF2DAC6FFB574DE")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getPlaylistItemsById("snippet,contentDetails", "UExCQ0YyREFDNkZGQjU3NERFLkMyQjUzQkM1OTFFRTNFMEQ")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>Playlists</summary>

#### By channelId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getPlaylistsByChannelId("snippet,contentDetails", "UC_x5XG1OV2P6uZZ5FSM9Ttw")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getPlaylistsById("snippet,contentDetails", "PLOU2XLYxmsIJwWXScAwCG5vSEQbwQsC0F")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>Search</summary>

```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

YouTubeAPI.SearchVideo("snippet", "Pedro Pascal crying")
    .then(function(data) {
         console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>Subscriptions</summary>

#### By channelId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 newRequest.getSubscriptionsByChannelId("snippet,contentDetails", "UC8OODSjWU3_KrAc5QJId4rA")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 newRequest.getSubscriptionsById("snippet", "Zf8Bp5m8bN3S-6pbkS-esH0a1I_RPSRL3pqsGWLjDhY")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>VideoCategories</summary>

#### By regionCode
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getVideoCategoriesByRegionCode("snippet", "ES")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By by resourceId
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getVideoCategoriesById("snippet", "44")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```
</details>

<details>
    <summary>Videos</summary>

#### By chart
```js
let YouTubeAPI = require("YouTubeAPI");

YouTubeAPI = new YouTubeAPI("API_KEY");

 YouTubeAPI.getVideosByChart("snippet", "mostPopular")
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error)
```

#### By resourceId
```js
 newRequest.getVideosById("snippet", "Ks-_Mh1QhMc")
     .then(function(data) {
         console.log(data);
     })
     .catch(console.error)
```
</details>
