import { useForm} from "react-hook-form"
import { useState, useEffect} from "react";

const getLocalStorage = () => {
    let msgs = localStorage.getItem('msgs');
    if (msgs) {

      return (msgs = JSON.parse(localStorage.getItem('msgs')));
    } else return []
    
  };

export default function Form() {
    const {register, handleSubmit, reset } = useForm({
        defaultValues: {}
    });
    const [msgs, setMsgs] = useState(getLocalStorage());
    const [msg, setMsg] = useState(false);

    const onSubmit = data => {
        console.log(data)
        setMsgs([...msgs, data.msg])
        reset()
        setMsg(true);
        const timer = setTimeout(() => {
            setMsg(false);
          }, 1200);
          return () => clearTimeout(timer);
    }
    function handleKey(e){
        if (e.key === "Enter" && e.target.value) {
            onSubmit();
          } else return; 
    }
    useEffect(() => {
        localStorage.setItem('msgs', JSON.stringify(msgs));
      }, [msgs]);
  return (
    
    <div className="form">
        {msg && <p className='msg'>Sent. Check console</p>}
        <h1>Message</h1>
        {msgs && 
            <div className="form__msgs">{msgs.map((elem, i)=> <p key={i}>{elem}</p>)}</div>
        }
        <form className="form__body" onSubmit={handleSubmit(onSubmit)}>
            <textarea onKeyDown={ (e)=>handleKey(e)} className="form__text" type="text" {...register('msg')}/>
            <button className="form__btn" type="submit">Send</button>
        </form>
    </div>
  )
}