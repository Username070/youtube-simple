const fetch = require("node-fetch");

class YouTubeAPI
{
    constructor(apiKey)
    {
        this.apiKey = apiKey;
    }

    /**
    * @param {string} part - Specifies the caption resource parts that the API response will include.
    * @param {string} videoId - Specifies the YouTube video ID of the video for which the API should return caption tracks.
    * @param {string} [id] - [OPTIONAL] Specifies a comma-separated list of IDs that identify the caption resources that should be retrieved.
    */
    async getCaptionsList(part, videoId, id)
    {
        if (id !== "" && id !== undefined)
        {
            return (fetch(`https://youtube.googleapis.com/youtube/v3/captions?part=${part}&videoId=${videoId}&key=${this.apiKey}`).then((res) => res.json()));
        } else {
            return (fetch(`https://youtube.googleapis.com/youtube/v3/captions?part=${part}&videoId=${videoId}&id=${id}&key=${this.apiKey}`).then((res) => res.json()));
        }
    }

    /**
    * @param {string} part - Specifies a comma-separated list of one or more channel resource properties that the API response will include. 
    * @param {string} id - Specifies a comma-separated list of the YouTube channel ID(s) for the resource(s) that are being retrieved.
    * @param {string} [hl] - [OPTIONAL] Instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
    * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
    * @param {string} [pageToken] - [OPTIONAL] The pageToken parameter identifies a specific page in the result set that should be returned.
    */
    async getChannelsListById(part, id, hl, maxResults, pageToken)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/channels?part=${part}&id=${id}`;

        url = this.generateLink(url, maxResults, hl, "", pageToken);

        return (fetch(url).then((res) => res.json()));
    }

    /**
    * @param {string} part - Specifies a comma-separated list of one or more channel resource properties that the API response will include. 
    * @param {string} forUsername - Specifies a YouTube username, thereby requesting the channel associated with that username.
    * @param {string} [hl] - [OPTIONAL] Instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
    * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
    * @param {string} [pageToken] - [OPTIONAL] The pageToken parameter identifies a specific page in the result set that should be returned.
    */
    async getChannelsListByName(part, forUsername, hl, maxResults, pageToken)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/channels?part=${part}&forUsername=${forUsername}`;

        url = this.generateLink(url, maxResults, hl, "", pageToken, "");

        return (fetch(url).then((res) => res.json()));
    }
    /**
     * @param {string} part - Specifies a comma-separated list of one or more channelSection resource properties that the API response will include.
     * @param {string} channelId - Specifies a YouTube channel ID.
     */
    async getChannelSectionsListByChannelId(part, channelId)
    {
        return (fetch(`https://youtube.googleapis.com/youtube/v3/channelSections?part=${part}&channelId=${channelId}&key=${this.apiKey}`).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more channelSection resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of IDs that uniquely identify the channelSection resources that are being retrieved.
     */
    async getChannelSectionsListById(part, id)
    {
        return (fetch(`https://youtube.googleapis.com/youtube/v3/channelSections?part=${part}&id=${id}&key=${this.apiKey}`).then((res) => res.json()));
    }
    /**
     * @param {string} part - Specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of comment IDs for the resources that are being retrieved.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [textFormat] - [OPTIONAL] Indicates whether the API should return comments formatted as HTML or as plain text.
     */
    async getCommentsListById(part, id, maxResults, pageToken, textFormat)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/comments?part=${part}&id=${id}`;

        url = this.generateLink(url, maxResults, "", "", pageToken, textFormat);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string} parentId - Specifies the ID of the comment for which replies should be retrieved.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [textFormat] - [OPTIONAL] Indicates whether the API should return comments formatted as HTML or as plain text.
     * @returns 
     */
    async getCommentsListByParentId(part, parentId, maxResults, pageToken, textFormat)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/comments?part=${part}&parentId=${parentId}`;

        url = this.generateLink(url, maxResults, pageToken, textFormat);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string} allThreadsRelatedToChannelId - Instructs the API to return all comment threads associated with the specified channel.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [order] - [OPTIONAL] Specifies the order in which the API response should list comment threads.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [searchTerms] - [OPTIONAL] Instructs the API to limit the API response to only contain comments that contain the specified search terms.
     * @param {string} [textFormat] - [OPTIONAL] Indicates whether the API should return comments formatted as HTML or as plain text.
     */
    async getCommentThreadsListByTRTCI(part, allThreadsRelatedToChannelId, maxResults, order, pageToken, searchTerms, textFormat)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=${part}&allThreadsRelatedToChannelId=${allThreadsRelatedToChannelId}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, textFormat, order, searchTerms);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string} channelId - instructs the API to return comment threads containing comments about the specified channel.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [order] - [OPTIONAL] Specifies the order in which the API response should list comment threads.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [searchTerms] - [OPTIONAL] Instructs the API to limit the API response to only contain comments that contain the specified search terms.
     * @param {string} [textFormat] - [OPTIONAL] Indicates whether the API should return comments formatted as HTML or as plain text.
     */
    async getCommentThreadsListByChannelId(part, channelId, maxResults, order, pageToken, searchTerms, textFormat)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=${part}&channelId=${channelId}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, textFormat, order, searchTerms);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of comment thread IDs for the resources that should be retrieved.
     * @param {integer} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [order] - [OPTIONAL] Specifies the order in which the API response should list comment threads. Valid values are.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [searchTerms] - [OPTIONAL] Instructs the API to limit the API response to only contain comments that contain the specified search terms.
     * @param {string} [textFormat] - [OPTIONAL] Instruct the API to return the comments left by users in html formatted or in plain text.
     */
    async getCommentThreadsListById(part, id, maxResults, order, pageToken, searchTerms, textFormat)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=${part}&id=${id}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, textFormat, order, searchTerms);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * 
     * @param {string} part - Specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     * @param {string} videoId - Instructs the API to return comment threads containing comments about the specified channel.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [order] - [OPTIONAL] Specifies the order in which the API response should list comment threads. Valid values are.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [searchTerms] - [OPTIONAL] Instructs the API to limit the API response to only contain comments that contain the specified search terms.
     * @param {string} [textFormat] - [OPTIONAL] Instruct the API to return the comments left by users in html formatted or in plain text.
     */
    async getCommentThreadsListByVideoId(part, videoId, maxResults, order, pageToken, searchTerms, textFormat)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=${part}&videoId=${videoId}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, textFormat, order, searchTerms);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies the i18nLanguage resource properties that the API response will include.
     * @param {string} [hl] - [OPTIONAL] pecifies the language that should be used for text values in the API response.
     */
    async GetI18nLanguageslist(part, hl)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/i18nLanguages?part=${part}`;
    
        url = this.generateLink(url, "", hl);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies the i18nRegion resource properties that the API response will include.
     * @param {string} hl - Specifies the language that should be used for text values in the API response.
     */
    async GetI18nRegionsList(part, hl)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/i18nRegions?part=${part}`;
    
        url = this.generateLink(url, "", hl);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of one or more unique playlist item IDs.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [videoId] - [OPTIONAL] Specifies that the request should return only the playlist items that contain the specified video.
     */
    async getPlaylistItemsListById(part, id, maxResults, pageToken, videoId)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=${part}&id=${id}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, "", "", "", videoId);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more playlistItem resource properties that the API response will include.
     * @param {string} playlistId - Specifies the unique ID of the playlist for which you want to retrieve playlist items.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {string} [videoId] - [OPTIONAL] Specifies that the request should return only the playlist items that contain the specified video.
     */
    async getPlaylistItemsListByPlaylistId(part, playlistId, maxResults, pageToken, videoId)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=${part}&playlistId=${playlistId}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, "", "", "", videoId);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more playlist resource properties that the API response will include.
     * @param {string} channelId - This value indicates that the API should only return the specified channel's playlists.
     * @param {string} [hl] - [OPTIONAL] Instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     */
    async getPlaylistsListByChannelId(part, channelId, hl, maxResults, pageToken)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/playlists?part=${part}&channelId=${channelId}`;
    
        url = this.generateLink(url, maxResults, hl, "", pageToken);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more playlist resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of the YouTube playlist ID(s) for the resource(s) that are being retrieved.
     * @param {string} [hl] - [OPTIONAL] Instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     */
    async getPlaylistsListById(part, id, hl, maxResults, pageToken)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/playlists?part=${part}&id=${id}`;
    
        url = this.generateLink(url, maxResults, hl, "", pageToken);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more subscription resource properties that the API response will include.
     * @param {string} channelId - Specifies a YouTube channel ID. The API will only return that channel's subscriptions.
     * @param {string} [forChannelId] - [OPTIONAL] Specifies a comma-separated list of channel IDs.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [order] - [OPTIONAL] Specifies the method that will be used to sort resources in the API response.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     */
    async getSubscriptionsListByChannelId(part, channelId, forChannelId, maxResults, order, pageToken)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=${part}&channelId=${channelId}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, "", order, "", "", forChannelId);

        console.log(url);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more subscription resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of the YouTube subscription ID(s) for the resource(s) that are being retrieved.
     * @param {string} [forChannelId] - [OPTIONAL] Specifies a comma-separated list of channel IDs.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [order] - [OPTIONAL] Specifies the method that will be used to sort resources in the API response.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     */
    async getSubscriptionsListById(part, id, forChannelId, maxResults, order, pageToken)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/subscriptions?part=${part}&id=${id}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, "", order, "", "", forChannelId);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies the videoCategory resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of video category IDs for the resources that you are retrieving.
     * @param {string} [hl] - [OPTIONAL] Specifies the language that should be used for text values in the API response.
     */
    async getVideoCategoriesListById(part, id, hl)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=${part}&id=${id}`;
    
        url = this.generateLink(url, "", hl);

        console.log(url);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies the videoCategory resource properties that the API response will include.
     * @param {string} regionCode - Instructs the API to return the list of video categories available in the specified country.
     * @param {string} [hl] - [OPTIONAL] Specifies the language that should be used for text values in the API response.
     */
    async getVideoCategoriesListByRegionCode(part, regionCode, hl)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=${part}&regionCode=${regionCode}`;
    
        url = this.generateLink(url, "", hl);

        return (fetch(url).then((res) => res.json()));
    }






    /**
     * @param {string} part - Specifies a comma-separated list of one or more video resource properties that the API response will include.
     * @param {string} chart - Identifies the chart that you want to retrieve.
     * @param {string} [hl] - [OPTIONAL] Instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.S
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {number} [maxHeight] - [OPTIONAL] Specifies the maximum height of the embedded player returned in the player.embedHtml property.
     * @param {number} [maxWidth] - [OPTIONAL] Specifies the maximum width of the embedded player returned in the player.embedHtml property.
     * @param {string} [regionCode] - [OPTIONAL] Instructs the API to select a video chart available in the specified region.
     * @param {string} [videoCategoryId] - [OPTIONAL] Identifies the video category for which the chart should be retrieved.
     */
    async getVideosListByChart(part, chart, hl, maxResults, pageToken, maxHeight, maxWidth, regionCode, videoCategoryId)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part${part}&chart=${chart}`;
    
        url = this.generateLink(url, maxResults, hl, "", pageToken, "", "", "", "", "", maxHeight, maxWidth, regionCode, videoCategoryId);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {string} part - Specifies a comma-separated list of one or more video resource properties that the API response will include.
     * @param {string} id - Specifies a comma-separated list of the YouTube video ID(s) for the resource(s) that are being retrieved.
     * @param {string} [hl] - [OPTIONAL] Instructs the API to retrieve localized resource metadata for a specific application language that the YouTube website supports.
     * @param {number} [maxResults] - [OPTIONAL] Specifies the maximum number of items that should be returned in the result set.
     * @param {string} [pageToken] - [OPTIONAL] Identifies a specific page in the result set that should be returned.
     * @param {number} [maxHeight] - [OPTIONAL] Specifies the maximum height of the embedded player returned in the player.embedHtml property.
     * @param {number} [maxWidth] - [OPTIONAL] Specifies the maximum width of the embedded player returned in the player.embedHtml property.
     * @param {string} [regionCode] - [OPTIONAL] Instructs the API to select a video chart available in the specified region.
     * @param {string} [videoCategoryId] - [OPTIONAL] Identifies the video category for which the chart should be retrieved.
     */
    async getVideosListById(part, id, hl, maxResults, pageToken, maxHeight, maxWidth, regionCode, videoCategoryId)
    {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part${part}&id=${id}`;
    
        url = this.generateLink(url, maxResults, hl, "", pageToken, "", "", "", "", "", maxHeight, maxWidth, regionCode, videoCategoryId);

        return (fetch(url).then((res) => res.json()));
    }

    /**
     * @param {*} part - Specifies a comma-separated list of one or more search resource properties that the API response will include.
     * @param {*} q - Specifies the query term to search for.
     * @param {*} publishedAfter - [OPTIONAL] - Indicates that the API response should only contain resources created at or after the specified time.
     * @param {*} publishedBefore - [OPTIONAL] - Indicates that the API response should only contain resources created before or at the specified time.
     * @param {*} pageToken - [OPTIONAL] - Identifies a specific page in the result set that should be returned.
     * @param {*} videoDuration - [OPTIONAL] - Filters video search results based on their duration.
     * @param {*} maxResults - [OPTIONAL] - Specifies the maximum number of items that should be returned in the result set.
     * @param {*} channelId - [OPTIONAL] - Indicates that the API response should only contain resources created by the channel.
     * @param {*} channelType - [OPTIONAL] - Lets you restrict a search to a particular type of channel.
     * @param {*} eventType - [OPTIONAL] - Restricts a search to broadcast events.
     * @param {*} location - [OPTIONAL] - Restricts a search to videos that specify, in their metadata, a geographic location that falls within that area.
     * @param {*} locationRadius - [OPTIONAL] - Defines a circular geographic area.
     * @param {*} order - [OPTIONAL] - Specifies the method that will be used to order resources in the API response. The default value is relevance.
     * @param {*} regionCode - [OPTIONAL] - Instructs the API to return search results for videos that can be viewed in the specified country.
     * @param {*} safeSearch - [OPTIONAL] - Indicates whether the search results should include restricted content as well as standard content.
     * @param {*} type - [OPTIONAL] - Restricts a search query to only retrieve a particular type of resource
     * @param {*} videoCategoryId - [OPTIONAL] - Filters video search results based on their category.
     * @param {*} videoDefinition - [OPTIONAL] - Lets you restrict a search to only include either high definition (HD) or standard definition (SD) videos.
     * @param {*} videoDimension - [OPTIONAL] - Lets you restrict a search to only retrieve 2D or 3D videos.
     * @param {*} videoEmbeddable - [OPTIONAL] - Lets you to restrict a search to only videos that can be embedded into a webpage.
     * @param {*} videoSyndicated - [OPTIONAL] - Lets you to restrict a search to only videos that can be played outside youtube.com.
     * @param {*} videoType - [OPTIONAL] - Lets you restrict a search to a particular type of videos.
     */
    async SearchVideoList(part, q, publishedAfter, publishedBefore, pageToken, videoDuration, maxResults, channelId,
        channelType, eventType, location, locationRadius, order, regionCode, safeSearch, type, videoCategoryId,
        videoDefinition, videoDimension, videoEmbeddable, videoSyndicated, videoType)
    {
        let url = `https://www.googleapis.com/youtube/v3/search?part${part}&q=${q}`;
    
        url = this.generateLink(url, maxResults, "", "", pageToken, "", order, "", "", "", "", "", regionCode,
        videoCategoryId, q, publishedAfter, publishedBefore, videoDuration, channelId, channelType, eventType,
        location, locationRadius, safeSearch, type, videoDefinition, videoDimension, videoEmbeddable,
        videoSyndicated, videoType);

        return (fetch(url).then((res) => res.json()));
    }






    generateLink(url, maxResults, hl, id, pageToken, textFormat, order, searchTerms,
        videoId, forChannelId, maxHeight, maxWidth, regionCode, videoCategoryId, q, publishedAfter, publishedBefore,
        videoDuration, channelId, channelType, eventType, videoSyndicated, videoType)
    {
        if (maxResults !== "" && maxResults != undefined)
        {
            url += `&maxResults=${maxResults}`;
        }
        if (hl !== "" && hl != undefined)
        {
            url += `&hl=${hl}`;
        }
        if (id !== "" && id != undefined)
        {
            url += `&id=${id}`;
        }
        if (maxResults !== "" && maxResults != undefined)
        {
            url += `&maxResults=${maxResults}`;
        }
        if (pageToken !== "" && pageToken != undefined)
        {
            url += `&pageToken=${pageToken}`;
        }
        if (textFormat !== "" && textFormat != undefined)
        {
            url += `&textFormat=${textFormat}`;
        }
        if (order !== "" && order != undefined)
        {
            url += `&order=${order}`;
        }
        if (searchTerms !== "" && searchTerms != undefined)
        {
            url += `&searchTerms=${searchTerms}`;
        }
        if (videoId !== "" && videoId != undefined)
        {
            url += `&videoId=${videoId}`;
        }
        if (forChannelId !== "" && forChannelId != undefined)
        {
            url += `&forChannelId=${forChannelId}`;
        }
        if (maxHeight !== "" && maxHeight != undefined)
        {
            url += `&maxHeight=${maxHeight}`;
        }
        if (maxWidth !== "" && maxWidth != undefined)
        {
            url += `&maxWidth=${maxWidth}`;
        }
        if (regionCode !== "" && regionCode != undefined)
        {
            url += `&regionCode=${regionCode}`;
        }
        if (videoCategoryId !== "" && videoCategoryId != undefined)
        {
            url += `&videoCategoryId=${videoCategoryId}`;
        }
        if (q !== "" && q != undefined)
        {
            url += `&q=${q}`;
        }
        if (publishedAfter !== "" && publishedAfter != undefined)
        {
            url += `&publishedAfter=${publishedAfter}`;
        }
        if (publishedBefore !== "" && publishedBefore != undefined)
        {
            url += `&publishedBefore=${publishedBefore}`;
        }
        if (videoDuration !== "" && videoDuration != undefined)
        {
            url += `&videoDuration=${videoDuration}`;
        }
        if (channelId !== "" && channelId != undefined)
        {
            url += `&channelId=${channelId}`;
        }
        if (channelType !== "" && channelType != undefined)
        {
            url += `&channelType=${channelType}`;
        }
        if (eventType !== "" && eventType != undefined)
        {
            url += `&eventType=${eventType}`;
        }
        if (videoSyndicated !== "" && videoSyndicated != undefined)
        {
            url += `&videoSyndicated=${videoSyndicated}`;
        }
        if (videoType !== "" && videoType != undefined)
        {
            url += `&videoType=${videoType}`;
        }
        url += `&key=${this.apiKey}`;
        return url;
    }
}

module.exports.YouTubeAPI = YouTubeAPI;