import dtopimg from '../../assets/dtopimg.png'
import ptodimg from '../../assets/ptodimg.png'
import mapimg from '../../assets/mapimg.jpg'
import '../../styles/home.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
    return (
        <div className=' home'> 
            <div className="services" >
                <div className="card shadow">
                    <div className="card-img-top">
                        <NavLink to='/dtopcont' >
                            <img src={dtopimg} alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className="card shadow">
                    <div className="card-img-top">
                        <NavLink to='/ptodcont' >
                            <img src={ptodimg} alt="" />
                        </NavLink>
                    </div>
                </div>
                <div className="card shadow">
                    <div className="card-img-top">
                        <NavLink to='/mapcont' >
                            <img src={mapimg} alt="" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home