import React from "react";
import "./inputfield-style.css";

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: (props.locked && props.active) || false,
            value: props.value || "",
            error: props.error || "",
            label: props.label || "Label",
            defaultValue: props.defaultValue || ""
        };
    }

    componentDidUpdate(){
        if (this.props.onChange){
            this.props.onChange(this.state.value || this.state.defaultValue);
        }
    }
    render() {
        const { active, value, error, label } = this.state;
        const { locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
            "active"} ${locked && !active && "locked"}`;
        return (
            <div className={fieldClassName}>
                <input
                    className="form-control"
                    type="number"
                    value={value}
                    placeholder={label}
                    onChange={(e) => this.setState({value: e.target.value, error: ""})}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label className={error && "error"}>
                    {error || label}
                </label>
            </div>
        );
    }
}

    export default InputField
