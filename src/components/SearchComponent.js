import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  //setear los hooks useState
  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  //función para traer los datos de la API
  const URL = 'https://jsonplaceholder.typicode.com/users'

  const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
  }   
   //función de búsqueda
  const searcher = (e) => {
      setSearch(e.target.value)   
  }
 
  const result = !search ? users : users.filter(data => data.name.toLowerCase().includes(search.toLowerCase())) 
 
  
   useEffect( ()=> {
    showData()
  }, [])
  
  //renderizamos la vista
  return (
    <div className='container'>
        <input value={search} onChange={searcher} type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>
            <thead>
                <tr className='bg-curso text-white'>
                    <th>NAME</th>
                    <th>USER NAME</th>
                </tr>
            </thead>
            <tbody>
                { result.map( (user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                    </tr>                    
                ))}
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent