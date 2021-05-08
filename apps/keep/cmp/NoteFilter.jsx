export class NoteFilter extends React.Component {
    state = {
        filterBy: {
            type: '',
            info: {
                txt:''
            },
            id: '',

        }
    }

    handleChange = (ev) => {
        const field = ev.target.name;
        const val = ev.target.type === 'number' ? +ev.target.value : ev.target.value;
        this.setState({ filterBy: { ...this.state.filterBy, [field]: val } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {

        const { type, info, id } = this.state.filterBy;

        return (
            <form className="note-filter" onSubmit={this.onFilter}>
                <label htmlFor="byType">By Type</label>
                <input type="text" name="type" id="byType" value={type} onChange={this.handleChange} />

                <label htmlFor="byInfo">By Info</label>
                <input type="text" name="info" id="byInfo" value={info.txt} onChange={this.handleChange} />

                <label htmlFor="byId">By id</label>
                <input type="text" name="id" id="byId" value={id} onChange={this.handleChange} />
            </form>
        )
    }

}