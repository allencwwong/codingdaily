import { useEffect,useState } from "react";
export const Day3= () => {
    const [data, setData] = useState(null)
    // get init data
    useEffect(()=>{
        const run= async()=>{
            const res = await fetch('http://www.boredapi.com/api/activity')
            const data = await res.json()
            setData([{data,isShown: false}])
        }
        run()
    },[])

    // handle click to gen new act
    const handleClickGen = async ()=>{
        const res = await fetch('http://www.boredapi.com/api/activity')
        const newData = await res.json()
        console.log(data)
        setData([...data,{data:newData,isShown: false}])
    }

    //  handle click to expand
    const handleClickExpand = (id)=>{
        data[id].isShown = !data[id].isShown 
        setData([...data])
    }

    // activity list
    const ActivityList = ({activties})=>{
        if(!activties) return <div>Loading...</div>

        const list = activties.map((activity,idx)=>{
            return <Activity activity={activity} idx={idx}/>
        })
        return (<ul>{list}</ul>)
    }

    const Activity = ({activity,idx})=>{
        return (
            <li>
                {activity.data.activity} <button onClick={()=>handleClickExpand(idx)}>expand</button>
                <ul style={{display: activity.isShown? 'block' : 'none' }}>
                    <li>{activity.data.type}</li>
                    <li>{activity.data.price}</li>
                    <li>{activity.data.link}</li>
                </ul>
            </li>
        )
    }

    // render data
    return (
      <>
        <h1>Day3</h1>
        <button onClick={handleClickGen}>Generate new activity</button>
        <ActivityList activties={data} />
      </>
    );
}