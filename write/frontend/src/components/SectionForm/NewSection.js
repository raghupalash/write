import getCookie from '../Cookie';

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

        let payloadData, sendTo;
        if (parent.props.wantText) {
            payloadData = data
            sendTo = 'section'
        } else {
            payloadData = {heading: parent.state.draftHeading}
            sendTo = 'blog'
        }
        
        // Sending data to the server to save draft section (or blog title)
        const payload = {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            'body': JSON.stringify(payloadData)
        }
        fetch(`http://127.0.0.1:8000/api/${sendTo}`, payload)
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