import { useState } from "react";

export const DisplayNested = ({ nestedObjected }) => {
  // taxi , food
  const entries = Object.entries(nestedObjected)

  return entries.map(entry=>{
      const [k,v] = entry
      console.log(k,v)
      if(typeof v !== 'object') return (<div style={{textAlign: 'left'}}>{k}<div>{v}</div></div>)
        return (
          <>
            <div style={{textAlign: 'left'}}>
              <p>{k}</p>
              <div style={{paddingLeft: 30}}>
                <DisplayNested nestedObjected={v} />
              </div>
            </div>
          </>
        )
    }
  )
}

export const Day1= () => {
    const [nestedObjected,] = useState({
        taxi: "a car licensed to transport passengers in return for payment of a fare",
        food: {
          sushi:
            "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
          apple: {
            Honeycrisp:
              "an apple cultivar developed at the MAES Horticultural Research Center",
            Fuji: "an apple cultivar developed by growers at Tohoku Research Station",
          },
        },
      });

    return (
          <DisplayNested nestedObjected={nestedObjected} />
      );
}