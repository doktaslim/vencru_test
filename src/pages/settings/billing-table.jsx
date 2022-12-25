import { BiDownArrowAlt } from "react-icons/bi";
import { FiDownloadCloud, FiCheck } from "react-icons/fi";
import { billing } from "../../constants/billing";
import Avater from "../../assets/avatar.png";

export default function BillingTable() {
  return (
    <div className="overflow-x-auto scroll relative rounded-md border">
      <table className="w-full text-sm text-left">
        <thead className="text-xs bg-gray-primary">
          <tr className="border-b">
            <th scope="col" className="p-4 whitespace-nowrap">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded accent-purple-primary"
                />
                <label className="sr-only">checkbox</label>
              </div>
            </th>
            <th scope="col" className="py-3 px-6 whitespace-nowrap">
              <div className="flex items-center space-x-1">
                <span>Invoice</span>
                <span>
                  <BiDownArrowAlt />
                </span>
              </div>
            </th>
            <th scope="col" className="py-3 px-6 whitespace-nowrap">
              Amount
            </th>
            <th scope="col" className="py-3 px-6 whitespace-nowrap">
              Date
            </th>
            <th scope="col" className="py-3 px-6 whitespace-nowrap">
              Status
            </th>
            <th scope="col" className="py-3 px-6 whitespace-nowrap">
              Users On Plan
            </th>
            <th scope="col" className="py-3 px-6 whitespace-nowrap"></th>
          </tr>
        </thead>
        <tbody>
          {billing.map(({ id, title, amount, date, status }) => (
            <tr key={id} className="bg-white border-b hover:bg-gray-primary">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded accent-purple-primary"
                  />
                  <label className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 text-[13px] whitespace-nowrap dark:text-white"
              >
                {title}
              </th>
              <td className="py-4 px-6 text-[13px] whitespace-nowrap">
                {amount}
              </td>
              <td className="py-4 px-6 text-[13px] whitespace-nowrap">
                {date}
              </td>
              <td className="py-4 px-6 text-[13px] whitespace-nowrap">
                <div className="flex items-center justify-center font-medium space-x-1 bg-green-50 rounded-md w-full text-[11px] text-green-600 h-full">
                  <FiCheck />
                  <span>{status}</span>
                </div>
              </td>
              <td className="py-4 px-6 text-[13px] whitespace-nowrap flex -space-x-1">
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src={Avater}
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src={Avater}
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src={Avater}
                  alt=""
                />
                <img
                  className="w-6 h-6 rounded-full border-2 border-white"
                  src={Avater}
                  alt=""
                />
                <div className="flex justify-center items-center w-6 h-6 text-xs font-medium bg-gray-200 rounded-full border-2 border-white">
                  +9
                </div>
              </td>
              <td className="py-4 px-6 text-[13px] whitespace-nowrap">
                <FiDownloadCloud className="cursor-pointer text-xl" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
