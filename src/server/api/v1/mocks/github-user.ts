// https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-the-authenticated-user

export const githubUser = {
    "status": 200,
    "url": "https://api.github.com/user?username=nomad-mystic",
    "headers": {
        "access-control-allow-origin": "*",
        "access-control-expose-headers": "ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Used, X-RateLimit-Resource, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type, X-GitHub-SSO, X-GitHub-Request-Id, Deprecation, Sunset",
        "cache-control": "private, max-age=60, s-maxage=60",
        "content-encoding": "gzip",
        "content-security-policy": "default-src 'none'",
        "content-type": "application/json; charset=utf-8",
        "date": "Wed, 20 Dec 2023 02:03:15 GMT",
        "etag": "W/\"e3399015a2f0ddc32e8dfffdc3175b683dc84c7bc255481310d7fd889b40bab8\"",
        "github-authentication-token-expiration": "2024-09-29 07:00:00 UTC",
        "last-modified": "Sun, 03 Dec 2023 04:54:19 GMT",
        "referrer-policy": "origin-when-cross-origin, strict-origin-when-cross-origin",
        "server": "GitHub.com",
        "strict-transport-security": "max-age=31536000; includeSubdomains; preload",
        "transfer-encoding": "chunked",
        "vary": "Accept, Authorization, Cookie, X-GitHub-OTP, Accept-Encoding, Accept, X-Requested-With",
        "x-accepted-oauth-scopes": "",
        "x-content-type-options": "nosniff",
        "x-frame-options": "deny",
        "x-github-api-version-selected": "2022-11-28",
        "x-github-media-type": "github.v3; format=json",
        "x-github-request-id": "DA4E:6321:26243E1:278C3A3:65824B63",
        "x-oauth-scopes": "project, read:repo_hook, read:user, repo, user:follow",
        "x-ratelimit-limit": "5000",
        "x-ratelimit-remaining": "4992",
        "x-ratelimit-reset": "1703041382",
        "x-ratelimit-resource": "core",
        "x-ratelimit-used": "8",
        "x-xss-protection": "0"
    },
    "data": {
        "login": "nomad-mystic",
        "id": 8921917,
        "node_id": "MDQ6VXNlcjg5MjE5MTc=",
        "avatar_url": "https://avatars.githubusercontent.com/u/8921917?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/nomad-mystic",
        "html_url": "https://github.com/nomad-mystic",
        "followers_url": "https://api.github.com/users/nomad-mystic/followers",
        "following_url": "https://api.github.com/users/nomad-mystic/following{/other_user}",
        "gists_url": "https://api.github.com/users/nomad-mystic/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/nomad-mystic/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/nomad-mystic/subscriptions",
        "organizations_url": "https://api.github.com/users/nomad-mystic/orgs",
        "repos_url": "https://api.github.com/users/nomad-mystic/repos",
        "events_url": "https://api.github.com/users/nomad-mystic/events{/privacy}",
        "received_events_url": "https://api.github.com/users/nomad-mystic/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Keith Murphy",
        "company": null,
        "blog": "https://www.nomadmystic.com",
        "location": "United States",
        "email": "nomadmystics@gmail.com",
        "hireable": true,
        "bio": null,
        "twitter_username": null,
        "public_repos": 59,
        "public_gists": 4,
        "followers": 20,
        "following": 85,
        "created_at": "2014-09-25T23:39:40Z",
        "updated_at": "2023-12-03T04:54:19Z",
        "private_gists": 2,
        "total_private_repos": 19,
        "owned_private_repos": 18,
        "disk_usage": 575629,
        "collaborators": 10,
        "two_factor_authentication": true,
        "plan": {
            "name": "pro",
            "space": 976562499,
            "collaborators": 0,
            "private_repos": 9999
        }
    }
}
