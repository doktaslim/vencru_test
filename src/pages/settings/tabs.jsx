import { tabs } from "../../constants/tabs";

export default function Tabs() {
    return (
      <div className="w-full overflow-x-auto scroll">
            <div className="flex w-full md:w-10/12 divide-x h-10 max-h-10 min-h-10 border rounded-md bg-white overflow-x-auto scroll">
                {tabs.map(({id, title }) => (
                    <div key={id} className={`cursor-pointer h-full w-full min-w-max px-5 md:px-0 max-w-full text-sm flex items-center justify-center font-medium text-gray-normal hover:bg-[#faf8f8] ${title === 'Billing' ? 'bg-[#faf8f8]' : ''}`}>
                        {title}
                    </div>
                ))}
        </div>
      </div>
  )
}
