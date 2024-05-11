

interface Props {
    logo: string;
    logoalt:string;
    query: string;
}


const Cards = ({logo, logoalt, query} : Props) => {
  return (
    <div className='sidebar-card'>
        <div className='sidebar-logo-container'>
           <img className='sidebar-logo' src={logo} alt={logoalt} />
        </div>
        <div className='sidebar-content'>
            <h5>{query}</h5>
        </div>
    </div>
  )
}
export default Cards