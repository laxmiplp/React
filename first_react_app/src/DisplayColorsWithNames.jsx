import { Component } from "react";

class DisplayColorsWithNames extends Component {
    constructor() {
        super()
        this.state = {
            colors: ['red', 'black', 'green'],
            names: ['Vicky', 'Ricky', 'Sukhi']
        }
    }
    render() {
        const { colors, names } = this.state
        return (
            <>
                <h1>Display Colors with Names</h1>
                {
                    names.map((name, i) => {
                        return (
                            <>
                                <h1 style={{ color: `${colors[i]}` }} key={i}>{name}</h1>

                            </>
                        )
                    })
                }
            </>

        )
    }
}
export default DisplayColorsWithNames