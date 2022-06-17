import { useState } from "react"

export const Day7= () => {

    const [terms ,setTerms] = useState(['allentesting','allen testing1234','hello'])
    const [modalConfigs,setModalConfigs] = useState({
        isShown: false,
        content: null
    })
    const [inputTerm,setInputTerm]=useState(null)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log([...terms,e.target.value])
        setTerms([...terms,inputTerm])
    }

    const handleClickTerm=(idx)=>{
        const configs = {
            isShown:true,
            content: terms[idx]
        }
        setModalConfigs(configs)
    }

    const handleOnChange=(e)=>{
        setInputTerm(e.target.value)
    }

    const Modal = ({isShown,content})=>{
        return isShown ? (<div style={{width: '500px',height: '500px',background: 'black',color:'#fff'}}>{content}</div>) : null
    }

    const ListTerms = ({terms})=>{
        return terms.map((term,idx)=>{
            return (<div onClick={()=>handleClickTerm(idx)}>{term.split('').slice(0,6).join('')}{term.length > 6 ? '...' : null}</div>)
        })
    }

    console.log(modalConfigs)

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleOnChange} type="text" />
            <ListTerms terms={terms} />
            <Modal isShown={modalConfigs.isShown} content={modalConfigs.content} />
        </form>
    );
}