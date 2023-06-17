import Button from "../components/Button"

const Buttons = () => {
    return (
        <>
            <h1 className="text-2xl font-medium mb-16">
                Buttons
            </h1>
            <div className="mb-11">
                <div className="text-sm mb-3">{"<Button />"}</div>
                <Button />
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{'<Button variant="outline" />'}</div>
                <Button variant="outline" />
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{'<Button variant="text" />'}</div>
                <Button variant="text" />
            </div>
            <div className="mb-11">
                <div className="text-sm mb-3">{'<Button disableShadow />'}</div>
                <Button color="primary" disableShadow />
            </div>
            <div className="mb-11 lg:w-1/3 flex justify-between flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button disabled />'}</div>
                    <Button disabled />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button variant="text" disabled />'}</div>
                    <Button variant="text" disabled />
                </div>
            </div>
            <div className="mb-11 lg:w-1/2 flex justify-between flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button startIcon="local_grocery_store" />'}</div>
                    <Button startIcon="local_grocery_store" color="primary" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button endIcon="local_grocery_store" />'}</div>
                    <Button endIcon="local_grocery_store" color="primary" />
                </div>
            </div>
            <div className="mb-11 lg:w-1/2 flex justify-between flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button size="sm" />'}</div>
                    <Button size="sm" color="primary" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button size="md" />'}</div>
                    <Button size="md" color="primary" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button size="lg" />'}</div>
                    <Button size="lg" color="primary" />
                </div>
            </div>
            <div className="lg:w-4/5 flex justify-between flex-wrap">
                <div>
                    <div className="text-sm mb-3">{'<Button color="default" />'}</div>
                    <Button color="default" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button color="primary" />'}</div>
                    <Button color="primary" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button color="secondary" />'}</div>
                    <Button color="secondary" />
                </div>
                <div>
                    <div className="text-sm mb-3">{'<Button color="danger" />'}</div>
                    <Button size="lg" color="danger" />
                </div>
            </div>
        </>
    )
}

export default Buttons;