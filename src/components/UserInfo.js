import React, { Component } from 'react'

export default class UserInfo extends Component {
    constructor(props){
        super()
        this.state={
            arr:[]
        }
    }
    render() {
        this.state.arr=this.props.user
        {console.log(this.state.arr)}
        return (
            <div>
              
            </div>
        )
    }
}

// login: "sibananda15"
// id: 53776985
// node_id: "MDQ6VXNlcjUzNzc2OTg1"
// avatar_url: "https://avatars0.githubusercontent.com/u/53776985?v=4"
// gravatar_id: ""
// url: "https://api.github.com/users/sibananda15"
// html_url: "https://github.com/sibananda15"
// followers_url: "https://api.github.com/users/sibananda15/followers"
// following_url: "https://api.github.com/users/sibananda15/following{/other_user}"
// gists_url: "https://api.github.com/users/sibananda15/gists{/gist_id}"
// starred_url: "https://api.github.com/users/sibananda15/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/sibananda15/subscriptions"
// organizations_url: "https://api.github.com/users/sibananda15/orgs"
// repos_url: "https://api.github.com/users/sibananda15/repos"
// events_url: "https://api.github.com/users/sibananda15/events{/privacy}"
// received_events_url: "https://api.github.com/users/sibananda15/received_events"
// type: "User"
// site_admin: false
// name: "Sibananda"
// company: null
// blog: ""
// location: null
// email: null
// hireable: null
// bio: null
// public_repos: 17
// public_gists: 0
// followers: 5