import getCookie from '../Cookie';

export default function NewSection(e, parent) {
    let data;
    let wantText = parent.props.wantText
    if (e.target.id === 'section-save') {
        // Sending data to App Component
        data = {
            heading: parent.state.draftHeading,
            paragraph: parent.state.draftText,
            heading_size: parent.state.headingChosen,
            writting: false,
        }

        let payloadData, sendTo;
        if (wantText) {
            payloadData = data
            sendTo = `section/${parent.state.blog}`
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
        .then(data => {
            if (!wantText) {
                parent.setState({
                    blog: data.blog_id
                });
                console.log(parent.state.blog)
            }
            console.log(data.message);
        })
        .catch(error => console.log(error));
        
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
    console.log(data)
    parent.props.dataToApp(data);
}