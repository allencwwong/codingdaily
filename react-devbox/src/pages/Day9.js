import { useState } from "react";

export const Day9 = () => {
  const EMPTY_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1088px-Five-pointed_star.svg.png";
  const FULL_STAR =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gold_Star.svg/1200px-Gold_Star.svg.png";

  const starIds = [1,2,3,4,5]
  const [hoverStar, setHoverStar] = useState(0)
  const [clickedStar, setClickedStar] = useState(0)

  const handleEnter = (id)=>{
    setHoverStar(id)
  }

  const handleLeave = ()=>{
    setHoverStar(0)
}

const handleClick = (id)=>{
    setClickedStar(id)
}

  const Star = ({src,alt,id})=>{
    return <img style={{display:'inline-block',width:'48px'}} onMouseEnter={()=>handleEnter(id)} onMouseLeave={handleLeave} onClick={()=>handleClick(id)} src={src} alt={alt} />
  }

  const StarRating = ()=>{
    return starIds.map(id=>{
        if(clickedStar >= id || hoverStar >= id){
            return <Star src={FULL_STAR} alt="empty" id={id} />
        }else{
            return <Star src={EMPTY_STAR} alt="fill" id={id} />
        }
    })
  }

  return (
    <div>
        <StarRating />
    </div>
  );
};
