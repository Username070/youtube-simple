const YouTubeAPI = require("./YouTubeAPI");

const newRequest = new YouTubeAPI.YouTubeAPI("");

// newRequest.getChannelsListByName("snippet", "QWERTY", "", 5, "") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

//     {
//         kind: 'youtube#channelListResponse',
//         etag: 'pri9qZVQ0El3o_ezStJ90mSRd6Y',
//         pageInfo: { totalResults: 1, resultsPerPage: 5 },
//         items: [
//           {
//             kind: 'youtube#channel',
//             etag: 'lsyEgBhMBg7uq1AJzfCPd83pvRE',
//             id: 'UCUf53DHwoQw4SvETXZQ2Tmg',
//             snippet: [Object]
//           }
//         ]
//       }

// newRequest.getChannelsListById("snippet", "UCUf53DHwoQw4SvETXZQ2Tmg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCaptionsList("snippet", "M7FIvfx5J10", "8yMV7mc691ajCze115cxb5goeKsI0BJn") //Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getChannelSectionsListByChannelId("snippet", "UCUf53DHwoQw4SvETXZQ2Tmg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getChannelSectionsListById("snippet", "UCUf53DHwoQw4SvETXZQ2Tmg.XgM4c0oGu94") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCommentsListById("snippet", "UgzDE2tasfmrYLyNkGt4AaABAg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCommentsListByParentId("snippet", "UgzDE2tasfmrYLyNkGt4AaABAg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCommentThreadsListByTRTCI("snippet", "UCUf53DHwoQw4SvETXZQ2Tmg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCommentThreadsListByChannelId("snippet", "UCUf53DHwoQw4SvETXZQ2Tmg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCommentThreadsListById("snippet", "UgwE82VhifJFVfLG90B4AaABAg") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getCommentThreadsListByVideoId("snippet", "dQw4w9WgXcQ") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.GetI18nLanguageslist("snippet", "lt") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.GetI18nRegionsList("snippet") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getPlaylistItemsListByPlaylistId("snippet,contentDetails", "PLBCF2DAC6FFB574DE") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getPlaylistItemsListById("snippet,contentDetails", "UExCQ0YyREFDNkZGQjU3NERFLkMyQjUzQkM1OTFFRTNFMEQ") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getPlaylistsListByChannelId("snippet,contentDetails", "UC_x5XG1OV2P6uZZ5FSM9Ttw") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getPlaylistsListById("snippet,contentDetails", "PLOU2XLYxmsIJwWXScAwCG5vSEQbwQsC0F") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getSubscriptionsListByChannelId("snippet,contentDetails", "UC8OODSjWU3_KrAc5QJId4rA") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getSubscriptionsListById("snippet", "Zf8Bp5m8bN3S-6pbkS-esH0a1I_RPSRL3pqsGWLjDhY") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getVideoCategoriesListByRegionCode("snippet", "ES") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getVideoCategoriesListById("snippet", "44") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getVideosListByChart("snippet", "mostPopular", "", "", "", "", "", "RU") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.getVideosListById("snippet", "Ks-_Mh1QhMc") // Tested
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(console.error)

// newRequest.SearchVideoList("snippet", "Rick Roll") // Tested
//     .then(function(data) {
//         console.log(data.items);
//     })
//     .catch(console.error)