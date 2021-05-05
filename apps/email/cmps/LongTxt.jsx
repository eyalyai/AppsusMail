export class LongTxt extends React.Component {
    state = {
        readMore: false
    }

    getTxt = () => {
        const txt = this.props.txt;
        if (this.state.readMore) return txt;
        else return txt.slice(0, 100);
    }

    toggleRead = () => {
        this.setState({ readMore: !this.setState.readMore })
    }

    render() {
        return (
            <span>
                <span className="read-more">{ this.getTxt() }<span onClick={ this.toggleRead }>{ this.state.readMore ? 'Read less' : '...' }</span></span>
            </span>
        )
    }
}