import spinner from '../../assets/spinner.svg'

/**
 * Render a loading spinner.
 * @returns {JSX.Element}
 * @constructor
 */
function Loader() {
  return (
    <div className='spinner_container'>
      <img src={spinner} alt="loading spinner" className='spinner_loader'/>
    </div>
  )
}

export default Loader

