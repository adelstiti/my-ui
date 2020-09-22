import React from 'react'
import "./Avatar.css"

const Avatar = () => {

    const users = [
        {
            name : 'Helen Coppola', 
            avatar : 'https://www.w3schools.com/w3images/avatar5.png'
        },
        {
            name : 'Nick Robins', 
            avatar : ''
        },
        {
            name : 'Chris Harris', 
            avatar : 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            name : 'Sandra Osborrne', 
            avatar : 'https://www.w3schools.com/howto/img_avatar2.png'
        },
        {
            name : 'Tim Johnson', 
            avatar : 'https://www.w3schools.com/bootstrap4/img_avatar1.png'
        },
        {
            name : 'Antonette Martinez', 
            avatar : ''
        }
    ]

    const getRandomColor = () => {
        const options = '0123456789ABCDEF'
        let color = '#';
        for(let i=0;i<6 ; i++){
            color += options[Math.floor(Math.random()*16)]
        }
        return color
    }
    return (
        <div id="app">
            <div>
                {users.map(user => {
                    return(
                        <div className="userCard">
                            {user.avatar ? 
                            <img className="avatar" alt={`avatar ${user.name}`} src={user.avatar} />
                            :
                            <div style={{background: getRandomColor(),mixBlendMode : 'difference'}} className="avatar">{user.name.split(' ').map(c => c[0].toUpperCase())}</div>    
                            }
                            {user.name}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Avatar
