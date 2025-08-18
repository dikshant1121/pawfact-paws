import { Link } from "react-router-dom"
export default function Error(){
    return(
        <>
            <div className="text-center">
                <img src="/assets/images/error.png" className="d-block mx-auto rounded-circle" style={{width:"500px"}}/>
                <h1>404</h1>
                <h1>Page Not found!!</h1>
                <h3>
                    <Link to="/">Back to HOME!!</Link>
                </h3>
            </div>
        </>
    )
}