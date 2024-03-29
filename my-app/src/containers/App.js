import React, { Component } from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageAction'
import { handleLogin } from '../actions/UserActions'

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction} = this.props

    return (
      <div className="app">
        <Page 
          photos = {page.photos} 
          year = {page.year}  
          getPhotos={getPhotosAction}
          isFetching={page.isFetching}
          />        
        <User 
          name = {user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
      </div>
    )
  }
}

const mapStateToProps = store => {
  //console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => {
  //console.log(dispatch)
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

