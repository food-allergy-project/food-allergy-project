// class HighlightButton extends React.Component {
//
//     state = {
//         isSelected: false,
//     }
//
//     setSelected = () => {
//         this.setState({
//             isSelected: !this.state.isSelected
//         })
//     }
//
//     render() {
//         const { quiz, setQuiz } = this.props;
//         return (
//             <button
//                 id="QuizButtonCards"
//                 className={this.state.isSelected ? 'selected' : ''}
//                 onClick={() => {
//                     this.setSelected();
//                     setQuiz(quiz);
//                 }}
//             >
//                 {quiz.toUpperCase()}
//             </button>
//         )
//     }
// }