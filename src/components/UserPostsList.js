import { connect } from 'react-redux'

const UserPostsList = (props) => {

    return (
        <div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.id,
        posts: state.user.posts
    }
}

export default connect(mapStateToProps)(UserPostsList)