import React, {useState, useEffect} from 'react'

import './styles.css'

const DevForm = (onSubmit) => {
    const [github_username, setGitihubUsername] = useState('')
    const [techs, setTechs] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords

                setLatitude(latitude)
                setLongitude(longitude)
            },
            (error) => {
                console.log(error)
            },
            {
                timeout: 30000,
            })
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(onSubmit)
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        })

        setGitihubUsername('')
        setTechs('')
    }

    return (    
       <form onSubmit={ handleSubmit }>
           <div className="input-block">
               <label htmlFor="github_username">
                   <i className="fa fa-github fa-lg"></i> GitHub User Name 
               </label>
               <input
                   name="github_username"
                   id="github_username" 
                   required
                   value={ github_username }
                   onChange={ e => setGitihubUsername(e.target.value) }
               />
           </div>
   
           <div className="input-block">
               <label htmlFor="techs"> 
                    <i className="fa fa-laptop fa-lg"></i> Tecnologies
               </label>
               <input
                   name="techs"
                   id="techs"
                   required
                   value={ techs }
                   onChange={ e => setTechs(e.target.value) }
               />
           </div>
   
           <div className="input-group">
               <div className="input-block">
                   <label htmlFor="latitude"> 
                       <i className="fa fa-map-marker fa-lg"></i> Latitude
                   </label>
                   <input 
                       name="latitude"
                       id="latitude"
                       value={ latitude }
                       onChange={ e => setLatitude(e.target.value) }
                       required
                   />
               </div>
   
               <div className="input-block">
                   <label htmlFor="longitude"> 
                       <i className="fa fa-map-marker fa-lg"></i> Longitude
                   </label>
                   <input 
                       name="longitude"
                       id="longitude"
                       value={ longitude }
                       onChange={ e => setLongitude(e.target.value) }
                       required
                   />
               </div>
           </div>
   
           <button type="submit"> Save </button>
       </form>
   )
}

export default DevForm