import { HiOutlineMail } from "react-icons/hi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { useState } from "react";
import { cards } from "../../constants/payment";

export default function PaymentMethod() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelectCard = (id) => {
    setSelectedCard(id);
  };
  return (
    <div className="w-full space-y-6 text-gray-normal">
      <div>
        <h4 className="text-lg font-medium text-gray-900">Payment Method</h4>
        <p className="text-sm">Update your billing details and address</p>
      </div>

      <hr />

      <div className="w-full grid grid-cols-1 md:grid-cols-9 gap-4 md:gap-0">
        <div className="col-span-3 text-sm">
          <p className="font-medium text-gray-800">Contact email</p>
          <p className="text-gray-500">Where should invoices be sent?</p>
        </div>
        <div className="w-full space-y-4 col-span-6">
          <label htmlFor="" className="flex items-start space-x-2">
            <input type="radio" className="mt-1 accent-purple-primary" />
            <div className="text-sm space-y-1">
              <p className="font-medium">Send to my account email</p>
              <span className="text-gray-500">olivia@untitledui.com</span>
            </div>
          </label>

          <label htmlFor="" className="flex items-start space-x-2 w-full">
            <input type="radio" className="mt-1 accent-purple-primary" />
            <div className="w-full text-sm space-y-1">
              <p className="font-medium">Send to an alternative email</p>
              <form className="relative rounded-md h-10 w-full md:w-7/12">
                <HiOutlineMail className="absolute top-1 mt-1 left-3 text-2xl" />
                <input
                  type="email"
                  name=""
                  className="outline-none w-full h-full rounded-md bg-white pl-10 pr-3 border focus:border-purple-primary"
                  defaultValue={"billing@untitledui.com"}
                />
              </form>
            </div>
          </label>
        </div>
      </div>

      <hr />

      <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
        <div className="col-span-3">
          <div className="col-span-3 text-sm">
            <p className="font-medium text-gray-800">Card details</p>
            <p className="text-gray-500">Select default payment method</p>
          </div>
        </div>
        <div className="space-y-3 col-span-6">
          {cards.map(({ id, heading, subheading, cardImage }) => (
            <div
              onClick={() => handleSelectCard(id)}
              key={id}
              className={`space-x-2 cursor-pointer border rounded-md p-3 py-4 flex items-start hover:border-purple-400 ${
                selectedCard === id
                  ? "text-purple-primary border-purple-primary bg-purple-50"
                  : "bg-white"
              }`}
            >
              <div>
                <img src={cardImage} alt="" />
              </div>

              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="text-sm font-medium">{heading}</p>
                  {selectedCard === id ? (
                    <BsCheckCircleFill className="text-purple-primary" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked className="text-gray-400" />
                  )}
                </div>

                <p className="mt-1 mb-4 text-sm">{subheading}</p>

                <div className="text-sm flex items-center space-x-4">
                  <p>Set as default</p>
                  <p className="font-medium text-purple-primary">Edit</p>
                </div>
              </div>
            </div>
          ))}

          <div className="cursor-pointer inline-flex items-center space-x-2">
            <FiPlus className="text-xl" />
            <p className="text-base">Add new payment method</p>
          </div>
        </div>
      </div>
    </div>
  );
}
