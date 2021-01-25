export default function UpdateResponse(e, parent) {
    if (e.target.id === "section-heading") {
        // For size of the main heading
        let headingSize = parent.state.headingChosen;
        if(!parent.props.wantText) {
            headingSize = 'h1';
        }
        parent.setState({
            draftHeading: e.target.value,
            headingChosen: headingSize, // Don't seem very great design
        })
    } else if (e.target.id === "heading-size") {
        parent.setState({
            headingChosen: `h${parseInt(e.target.value) + 1}`,
        })
    } else {
        parent.setState({
            draftText: e.target.value,
        })
    }
}