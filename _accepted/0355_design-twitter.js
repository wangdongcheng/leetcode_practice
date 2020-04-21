// 355. Design Twitter
// Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:

// postTweet(userId, tweetId): Compose a new tweet.
// getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
// follow(followerId, followeeId): Follower follows a followee.
// unfollow(followerId, followeeId): Follower unfollows a followee.

// Example:

// Twitter twitter = new Twitter();

// // User 1 posts a new tweet (id = 5).
// twitter.postTweet(1, 5);

// // User 1's news feed should return a list with 1 tweet id -> [5].
// twitter.getNewsFeed(1);

// // User 1 follows user 2.
// twitter.follow(1, 2);

// // User 2 posts a new tweet (id = 6).
// twitter.postTweet(2, 6);

// // User 1's news feed should return a list with 2 tweet ids -> [6, 5].
// // Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.
// twitter.getNewsFeed(1);

// // User 1 unfollows user 2.
// twitter.unfollow(1, 2);

// // User 1's news feed should return a list with 1 tweet id -> [5],
// // since user 1 is no longer following user 2.
// twitter.getNewsFeed(1);

/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.globeTweetID = 1;
    this.userTweet = new Map();
    this.userFollowee = new Map();
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    let tweetArr = new Set();
    if (this.userTweet.has(userId)) {
        tweetArr = this.userTweet.get(userId);
    }
    tweetArr.add({
        tweetID: tweetId,
        globeID: this.globeTweetID
    });
    this.userTweet.set(userId, tweetArr);
    this.globeTweetID++;
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let allTweet = [];
    let ret = [];
    if (this.userTweet.has(userId)) {
        let tweetSet = this.userTweet.get(userId);
        if (tweetSet.size) {
            tweetSet.forEach(obj => {
                allTweet.push(obj);
            })
        }
    }
    if (this.userFollowee.has(userId)) {
        let followeeSet = this.userFollowee.get(userId);
        if (followeeSet.size) {
            followeeSet.forEach(flwee => {
                if (this.userTweet.has(flwee)) {
                    tweetSet = this.userTweet.get(flwee);
                    if (tweetSet.size) {
                        tweetSet.forEach(obj => {
                            allTweet.push(obj);
                        })
                    }
                }
            })
        }
    }
    allTweet.sort((a, b) => b.globeID - a.globeID);
    let i = 0;
    while (i < Math.min(10, allTweet.length)) {
        ret.push(allTweet[i].tweetID);
        i++;
    }
    return ret;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (followeeId === followerId) return void 0;
    let followeeSet = new Set();
    if (this.userFollowee.has(followerId)) {
        followeeSet = this.userFollowee.get(followerId);
    }
    followeeSet.add(followeeId);
    this.userFollowee.set(followerId, followeeSet);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    let followeeSet = new Set();
    if (this.userFollowee.has(followerId)) {
        followeeSet = this.userFollowee.get(followerId);
    }
    followeeSet.delete(followeeId);
    this.userFollowee.set(followerId, followeeSet);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

// let tw = new Twitter();
// tw.postTweet(1, 5);
// console.log(tw.getNewsFeed(1));
// tw.follow(1, 2);
// tw.postTweet(2, 6);
// console.log(tw.getNewsFeed(1));
// tw.unfollow(1, 2);
// console.log(tw.getNewsFeed(1));

const test = (op, para) => {
    let log = [];
    let tw = new Twitter();
    op.forEach((val, idx, arr) => {
        if (val === "Twitter") {
            tw = new Twitter();
            log.push(null);
        } else if (val === "postTweet") {
            tw.postTweet(para[idx][0], para[idx][1]);
            log.push(null);
        } else if (val === "getNewsFeed") {
            log.push(tw.getNewsFeed(para[idx][0]));
        } else if (val === "follow") {
            tw.follow(para[idx][0], para[idx][1]);
            log.push(null);
        } else if (val === "unfollow") {
            tw.unfollow(para[idx][0], para[idx][1]);
            log.push(null);
        }
    })
    return log;
}

let op = ["Twitter", "postTweet", "getNewsFeed", "follow", "getNewsFeed", "unfollow", "getNewsFeed"];
let para = [[], [1, 1], [1], [2, 1], [2], [2, 1], [2]];
console.log(test(op, para), [null, null, [1], null, [1], null, []]);

op = ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"];
para = [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]];
console.log(test(op, para), [null, null, [5], null, null, [6, 5], null, [5]]);

op = ["Twitter", "postTweet", "follow", "getNewsFeed"];
para = [[], [1, 5], [1, 1], [1]];
console.log(test(op, para), [null, null, null, [5]]);

op = ["Twitter", "postTweet", "postTweet", "unfollow", "follow", "getNewsFeed"];
para = [[], [1, 4], [2, 5], [1, 2], [1, 2], [1]];
console.log(test(op, para), [null, null, null, null, null, [5, 4]]);