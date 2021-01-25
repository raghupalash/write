export default function CancelSection(e, parent) {
    if (e.target.id === 'section-cancel') {
        parent.setState({
            cancelWarning: true,
        })
    } else {
        // Hide the form and remove the content that was displayed on the form
        parent.setState({
            draftHeading: '',
            draftText: '',
            headingChosen: `h${2}`,
            writting: false,
            cancelWarning: false,
        })
    }
    

    
}

