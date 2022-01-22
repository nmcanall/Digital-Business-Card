import profilePic from "../styling/images/profile-pic.JPG"

function Info() {
    return (
        <div className="info">
            <image src={profilePic} alt="face shot of Nate McAnally"/>
            <h1>Nathan McAnally</h1>
            <h3>(Nate)</h3>
            <h4>Full Stack Web Developer</h4>
            <div className="contact-blocks">
                <p>email</p>
                <p>LinkedIn</p>
            </div>
        </div>
    )
}

export default Info;