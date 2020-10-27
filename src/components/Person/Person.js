import React, { useRef, useState } from 'react'
import './Person.css'
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const Person = () => {

    const [show, setShow] = useState(true)
    const refDesc = useRef()
    const refName = useRef()
    const refImg = useRef()

    const sendText = (e) => {
        e.target.animate({
            transform : 'translateY(-160px)'
        },900,)

        var fadeEffect = setInterval(function () {
             if (!refDesc.current.style.opacity) {
                 refDesc.current.style.opacity = 1;
             }
             if (refDesc.current.style.opacity > 0) {
                 refDesc.current.style.opacity -= 0.1;
             } else {
                 clearInterval(fadeEffect);
             }
         }, 70);

       var fadeEffecti = setInterval(function () {
        if (!refName.current.style.opacity) {
            refName.current.style.opacity = 1;
        }
        if (refName.current.style.opacity > 0) {
            refName.current.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffecti);
        }
    }, 70);

    var fadeEffecta = setInterval(function () {
        if (!refImg.current.style.opacity) {
            refImg.current.style.opacity = 1;
        }
        if (refImg.current.style.opacity > 0) {
            refImg.current.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffecta);
        }
    }, 70);

    setTimeout(() => {
        setShow(false)
    }, 800);
    }

    // refbuTon.current && console.log(refbuTon.current.offsetTop)



    return (
        <div className="card-person">
         {show ? 
         (
         <>
            <div ref={refImg}  className="img-person"></div>
            <p  ref={refName} > Adel Stiti</p>
            <span ref={refDesc} > Web Developer</span>
            <button onClick={(e) => sendText(e)}>Send message</button>
         </>
         )
        :
       ( <>
        <KeyboardReturnIcon style={{float : 'right',cursor : 'pointer'}} onClick={() => setShow(true)} />
        <textarea cols="27" rows="10"></textarea>
        <button>Send</button>
        </>
       )
        }
        </div>
    )
}

export default Person
