import { Component } from "react";
import { studentData } from "./Data/studentData";

class Card extends Component {
    render() {
        console.log(studentData)
        return (

            <>
                <div className="row">
                    {studentData.map((cardData, index) => {
                        return (

                            <div className="col-md-4" key={cardData.id || index}>

                                <div className="card">
                                    <div className="card-title">
                                        <h1>{this.props.heading}</h1>
                                    </div>
                                    <div className="card-body">


                                        <p><strong>ID:</strong>{cardData.id ? cardData.id : "NA"}
                                        </p>
                                        <p><strong>Name:</strong>{cardData.name ? cardData.name : "NA"}
                                        </p>
                                        <p><strong>Email:</strong>{cardData.email ? cardData.email : "NA"}
                                        </p>
                                        <p><strong>Age:</strong>{cardData.age ? cardData.age : "NA"}
                                        </p>

                                    </div>
                                </div>




                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}
export default Card