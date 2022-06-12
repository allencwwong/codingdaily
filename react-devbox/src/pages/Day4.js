import { useState } from "react"
export const Day4= () => {
    const LADDER_IMG = `${process.env.PUBLIC_URL}/ladder.png`
    const LADDERS = [1,2,3,4,5]
    const [isHover,setIsHover] = useState(0)

    const handleMouseOver = (idx)=>{
        setIsHover(idx)
        console.log('hover')
    }

    const handleMouseOut = ()=>{
        setIsHover(0)
        console.log('out')
    }

    const Ladder = ({idx})=>{
        console.log(isHover,idx)
        let size = isHover >= idx ? '80' : '150'
        return (<div style={{display:'block'}}>
            <img style={{display:'inline-block'}} width={size} height={size} src={LADDER_IMG} alt="" onMouseOut={handleMouseOut} onMouseEnter={()=>handleMouseOver(idx)} />
        </div>)
    }

    const Ladders = ()=>{
        return LADDERS.map((ladderId)=>{
            return <Ladder idx={ladderId} />
        })
    }

    return (
      <>
        <h1>Day4</h1>
        <Ladders />
      </>
    );
}