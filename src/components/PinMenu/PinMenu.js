import React, { useState } from 'react'
import "./PinMenu.css"
const PinMenu = () => {
    const heyLogoSrc =
  'https://production.haystack-assets.com/assets/avatars/defaults/hey-84b6169bf4060a76a94a072fe96b5fef7970b02d19507e2ab3952c042c21b154.svg';
  const [clicked, setClicked] = useState(false)
    const listOfItems = [
        'semicolon.academy',
        'twitter@SemicolonA',
        'FB.com/semicolonAcademy',
        'YT.com/SemicolonAcademy',
        'twitter@med7atdawoud',
        'IG/medhatdawoud',
        'medhatdawoud.net',
        ];
    

        const onClick = () => {
            setClicked(!clicked)
            
        }

    return (
       <div >
            <div id="stack" onClick={onClick}>
            {listOfItems && listOfItems.map( (item,i) => {
                const baseScale = 0.03333333;
                const baseTranslate = .7 ;
                const reverse = listOfItems.length - 1 - i ;
                return(
                    <div key={i} className="single-block" 
                    style={{transform : !clicked ?
                        `scale(${1 - reverse * baseScale}) translateY(-${baseTranslate*reverse}rem)`
                        :
                        `rotate(${i *1.4}deg) translate(${reverse * 0.3}rem,-${i*4.5}rem)`
                    }}>
                        <div className="content">
                            <img src={heyLogoSrc} alt={item} />
                            <div><h3>{item}</h3><p>description</p></div>
                        </div>
                    </div>

                )}
            )}
            </div>
       </div>
    )
}

export default PinMenu
