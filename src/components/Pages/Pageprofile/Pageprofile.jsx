import css from './Pageprofile.css'
import Infosprofile from './Infosprofile/Infosprofile.jsx'

import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import NotFound from '../../Global/NotFound/NotFound'
import Garage from './Garage/Garage'
import Timeline from './Timeline/Timeline'

export default function Pageprofile() {
    const { username } = useParams();
    const getProfile = () => {
        axios.get('http://localhost:4000/player/' + username)
            .then(response => {
                setUser(response.data[0])
            })
    }
    getProfile()

    const [user, setUser] = useState('')

    if (user) {
        return (
            <div className="page-profile">
                    <Infosprofile level={user.Level} username={user.Username} job={user.Job} rp={user.Rp} mp={user.Mp} id={'wip'} />
                    <Garage/>
                    <section className='heatmap'>
                        <h2>Ficha do jogador</h2>
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        <Timeline />
                        
                    </section>
            </div>
        )
    }
    else {
        return (
            <div className="page-profile">
                <div className="container">
                    <NotFound />
                </div>
            </div >
        )
    }
}