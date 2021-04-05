export default function NewSection(e, parent) {
    let data;
    if (e.target.id === 'section-save') {
        // Sending data to App Component
        data = {
            heading: parent.state.draftHeading,
            paragraph: parent.state.draftText,
            headingChosen: parent.state.headingChosen,
            writting: false,
        }
        
        // Sending data to the server to save draft section
        fetch('http://127.0.0.1:8000/')
        .then(response => response.json())
        .then(data => console.log(data))

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
        data = {
            writting: true,
        }
        parent.setState({
            writting: true,
        })
    } 

    // Send data
    parent.props.dataToApp(data);
}