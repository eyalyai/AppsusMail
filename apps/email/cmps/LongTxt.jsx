export class LongTxt extends React.Component {
    state = {
        readMore: false
    }

    getTxt = () => {
        const { txt } = this.props;
        if (this.state.readMore) return txt;
        return txt.slice(0, 100);
    }

    toggleRead = () => {
        this.setState({ readMore: !this.state.readMore })
    }

    addReadmoreMsg = () => {
        if (this.props.txt.length > 100) {
            return (this.state.readMore) ? 'Read less' : '...'
        }
    }

    render() {
        return (
            <span>
                <span className="read-more">{ this.getTxt() }<span onClick={ this.toggleRead }>{ this.addReadmoreMsg() }</span></span>
            </span>
        )
    }
}
