import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  } 
  render() {
    console.log(this.props)
    const { year, photos, isFetching} = this.props
    return (
    <div className="ib page">
      <p>
        <button className="btn" onClick={this.onBtnClick}>
          2018
        </button>{' '}
        <button className="btn" onClick={this.onBtnClick}>
          2017
        </button>{' '}
        <button className="btn" onClick={this.onBtnClick}>
          2016
        </button>{' '}
        <button className="btn" onClick={this.onBtnClick}>
          2015
        </button>{' '}
        <button className="btn" onClick={this.onBtnClick}>
          2014
        </button>
      </p>
      <h3>{year} год</h3>
      {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
    </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,

}
