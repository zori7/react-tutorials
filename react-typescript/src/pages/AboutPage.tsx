import React, {useEffect} from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()

    useEffect(() => {
        const unregister = history.block(() => {
            return false
        })

        return () => {
            unregister()
        }
    }, [])

    return (
        <>
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam architecto aspernatur consequuntur cupiditate dolor exercitationem iste iusto sint voluptatem. A eligendi explicabo facere fugiat ipsa molestiae nihil quibusdam quod.</p>
            <button className="btn" onClick={() => history.push('/')}>Back</button>
        </>
    )
}
