import react from "react"
import videos from ""

function Video() {
    return (
        <>
            <p>hello</p>
            <video width="750" height="500" controls>
                <source src={videos} type="video/mp4" />
            </video>
        </>
    )
}

export default Video