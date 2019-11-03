import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addArticle } from '../actions/index'

const mapDispatchToProps = (dispatch) => (
    { addArticle: article => dispatch(addArticle(article)) }
);

// class ConnectedForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: ""
//         };
//     }
//     handleChange = (event) => {
//         this.setState({ [event.target.id]: event.target.value });
//     }
//     handleSubmit = (event) => {
//         event.preventDefault();
//         const { title } = this.state;
//         this.props.addArticle({ title });
//         this.setState({ title: "" });
//     }
//     render() {
//         const { title } = this.state;
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <label htmlFor="title">Title</label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={title}
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <button type="submit">SAVE</button>
//             </form>
//         );
//     }
// }

const ConnectedForm = (props) => {
    const [title, setTitle] = useState("");
    const handleChange = (event) => {
        setTitle(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addArticle({ title });
        setTitle("");
    }
    return (<form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={handleChange}
            />
        </div>
        <button type="submit">SAVE</button>
    </form>
    );
}


const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;