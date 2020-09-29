import React from "react"
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";


const SeeMoreDetail = () => {

    return (
        <div>
            <div className="App" style={styleContainer}>
                <h1 style={styleH1}>See-more Detail</h1>
                <br />
                <div><h3>Meaning</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae sunt non, impedit quaerat nulla rem veritatis consequuntur voluptatibus provident at tempore fugiat quas, eveniet hic quis ipsum similique commodi?</p></div>
                <hr />
                <div><h3>Origin</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae sunt non, impedit quaerat nulla rem veritatis consequuntur voluptatibus provident at tempore fugiat quas, eveniet hic quis ipsum similique commodi?</p></div>
                <hr />
                <div><h3>Average-age Range</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae sunt non, impedit quaerat nulla rem veritatis consequuntur voluptatibus provident at tempore fugiat quas, eveniet hic quis ipsum similique commodi?</p></div>
                <hr />
                <div><h3>Related Names</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae sunt non, impedit quaerat nulla rem veritatis consequuntur voluptatibus provident at tempore fugiat quas, eveniet hic quis ipsum similique commodi?</p>
                </div>
                <hr />
                <div><h3>Aliases</h3><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae sunt non, impedit quaerat nulla rem veritatis consequuntur voluptatibus provident at tempore fugiat quas, eveniet hic quis ipsum similique commodi?</p></div>
                <br />
                <div><h3>Gender</h3><FaFemale style={styleFemale} /><FaMale style={styleMale} />
                </div>
            </div>
        </div>
    )
}
export default SeeMoreDetail;

const styleContainer = {
    width: "75%",
    background: "#EEEEEE",
    borderline: "black",
    textAlign: "center",
    margin: "40px 0px 20px 100px",
}
const styleH1 = {
    color: "white",
    background: "black"
}
const styleFemale = {
    width: "60px",
    height: "60px",
    color: "#F50057",
}
const styleMale = {
    width: "50px",
    height: "50px",
    color: "blue",
}