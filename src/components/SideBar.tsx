import { Dispatch, SetStateAction } from "react";

type Props = {
    activeTab: 'buttons' | 'inputs',
    setActiveTab: Dispatch<SetStateAction<"buttons" | "inputs">>;
}

export const SideBar = ({ activeTab, setActiveTab }: Props) => {
    return (
        <div className="p-4 lg:p-11 bg-custom-gray-200">
            <div className="sticky top-11">
                <h2 className="font-medium mb-20"><span className="text-red-600">Dev</span>challenges.io</h2>
                <div className="mb-8">
                    <button
                        className={`text-sm w-full text-left font-medium ${activeTab === 'buttons' ? '' : 'text-custom-gray-300'}`}
                        onClick={() => setActiveTab('buttons')}
                    >
                        Buttons
                    </button>
                </div>
                <div>
                    <button
                        className={`text-sm w-full text-left font-medium ${activeTab === 'inputs' ? '' : 'text-custom-gray-300'}`}
                        onClick={() => setActiveTab('inputs')}
                    >
                        Inputs
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideBar;