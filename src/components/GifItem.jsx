import PropTypes from 'prop-types';


export const GifItem = ({title, url, id}) => {

    //console.log({ id: id, title: title, url: url });

  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )

}



GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}