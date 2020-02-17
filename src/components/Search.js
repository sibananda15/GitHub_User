import React, { Component } from 'react'
import { connect } from "react-redux"
import { thunk_action_creator } from "../redux/action"

class Search extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.getUsername.value;
        this.props.dispatch(thunk_action_creator(username))
        console.log(username);
        this.getUsername.value = "";
    }

    render() {
        console.log(this.props.data)
        return (
            <div>
                <h1>ENTER THE GITHUB USERNAME</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="SearchUser" ref={input => (this.getUsername = input)} />
                    <button type="submit">Submit</button>
                </form>
                {this.props.data.isFetching ? <h3>Loading...</h3> : null}
                {this.props.data.isError ? (
                    <h3 className="error">No such User exists.</h3>
                ) : null}
                {Object.keys(this.props.data.userData).length > 0 ? (
                    <div className="user-info">
                        <div className="avatar">
                            <img src={this.props.data.userData.avatar_url} alt="avatar" width="250px" />
                        </div>
                        <div className="content">
                            <p>
                                <label>Name: </label>
                                {this.props.data.userData.name}
                            </p>
                            <p>
                                <label>Login Id: </label>
                                {this.props.data.userData.login}
                            </p>
                            <p>
                                <label>No of Repos:</label> {this.props.data.userData.public_repos}
                            </p>
                            <p>
                                <label>Followers:</label> {this.props.data.userData.followers}
                            </p>
                            <p>
                                <label>Following:</label> {this.props.data.userData.following}
                            </p>
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state
    };
};
export default connect(mapStateToProps)(Search);
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