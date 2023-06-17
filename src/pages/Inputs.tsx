import Input from "../components/Input";

const Inputs = () => {
    return (
        <>
            <h1 className="text-2xl font-medium mb-16">
                Inputs
            </h1>
            <div className="mb-11">
                <div className="text-sm mb-3">{"<Input />"}</div>
                <Input />
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{"<Input error />"}</div>
                <Input error />
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{"<Input disabled />"}</div>
                <Input disabled />
            </div>
            <div className="mb-11 gap-40 flex flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button helperText="Some interesting text" />'}</div>
                    <Input helperText="Some interesting text" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button helperText="Some interesting text" error />'}</div>
                    <Input helperText="Some interesting text" error />
                </div>
            </div>
            <div className="mb-11 gap-40 flex flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button startIcon />'}</div>
                    <Input startIcon="phone" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button endIcon />'}</div>
                    <Input endIcon="lock" />
                </div>
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{'<Input value="text" />'}</div>
                <Input value="text" />
            </div>
            <div className="mb-11 gap-40 flex flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button size="sm" />'}</div>
                    <Input size="sm" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button size="md" />'}</div>
                    <Input size="md" />
                </div>
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{'<Input fullWidth />'}</div>
                <Input fullWidth />
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{'<Input multiline rows="4" />'}</div>
                <Input multiline rows={4} />
            </div>
        </>
    )
}

export default Inputs;