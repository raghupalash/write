export default function NewSection(e, parent) {
    if (e.target.id === 'section-save') {
        // Sending data to App Component
        let data = {
            heading: parent.state.draftHeading,
            paragraph: parent.state.draftText,
            headingChosen: parent.state.headingChosen,
        }
        parent.props.dataToApp(data);
        
        parent.setState({
            writting: false,
            headingChosen: `h${2}`,
        }) 

        // Changing state of this component
        parent.setState({
            draftHeading: '',
            draftText: '',
        })
    } else {
        parent.setState({
            writting: true,
        })
    }
}