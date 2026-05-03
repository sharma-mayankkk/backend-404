require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const githubData = {
    "login": "sharma-mayankkk",
    "id": 180250013,
    "node_id": "U_kgDOCr5lnQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/180250013?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/sharma-mayankkk",
    "html_url": "https://github.com/sharma-mayankkk",
    "followers_url": "https://api.github.com/users/sharma-mayankkk/followers",
    "following_url": "https://api.github.com/users/sharma-mayankkk/following{/other_user}",
    "gists_url": "https://api.github.com/users/sharma-mayankkk/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/sharma-mayankkk/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/sharma-mayankkk/subscriptions",
    "organizations_url": "https://api.github.com/users/sharma-mayankkk/orgs",
    "repos_url": "https://api.github.com/users/sharma-mayankkk/repos",
    "events_url": "https://api.github.com/users/sharma-mayankkk/events{/privacy}",
    "received_events_url": "https://api.github.com/users/sharma-mayankkk/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Mayank Kumar Sharma ",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "BTech undergrad @2027\r\nVI sem \r\n",
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 5,
    "following": 7,
    "created_at": "2024-09-03T04:51:19Z",
    "updated_at": "2026-05-01T08:32:25Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('@dev_mayankkk')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h1>Chai aur Code</h1>')
})

app.get('/github',(req,res)=>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
