import '../styles/dtop.css'

const Ptod = () =>{
    return (
        <div className="way container">
            <h2 className='text-center'>Enter How much amount you want to exchange phisical to digital </h2>
            <form action="" className="row ">
                <div className="">
                    <label htmlFor="" className="form-label">Enter amount </label>
                    <input type="number"  min='500' className="form-control"/>
                </div>
                <div>
                    <input type="submit"  className='btn btn-success'/>
                </div>
            </form>
        </div>
    )
}
export default Ptod