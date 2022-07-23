import spinner from '../../assets/spinner.svg'

/**
 * @function Loader
 * 
 * @returns {JSX.Element} - Allows to display a spinner during a loading action.
 */
function Loader() {
  return (
    <div className='spinner_container'>
      <img src={spinner} alt="loading spinner" className='spinner_loader'/>      
    </div>
    )
}

export default Loader

