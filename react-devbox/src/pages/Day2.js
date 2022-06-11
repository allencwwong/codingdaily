import {useState} from 'react'

export const RobotList = ({data}) =>{
  console.log(data)
  return data.map(imgUrl=>{
    return (<div><img src={imgUrl} alt="" /></div>)
  })
}

export const Day2= () => {
    const [robotList, setRobotList] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = (e)=>{
      e.preventDefault()
      setRobotList([...robotList,`https://robohash.org/${searchTerm}`])
    }

    const handleOnChange = (e)=>{
      setSearchTerm(e.target.value)
    }

    return (
      <>
        <h1>Day2</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input onChange={(e)=>handleOnChange(e)}/>
            <button type='submit'>submit</button>
          </form>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
            {robotList ? <RobotList data={robotList} /> : null }
          </div>
        </div>
      </>
    );
}