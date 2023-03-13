import { ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/solid";

const CustomerHeader = ({ chat }) => {
  return (
    <div className="flex items-center justify-between pl-2.5 pr-8 border-b">
      <div className="flex justify-between items-center gap-2.5">
        <ChatBubbleLeftRightIcon className="w-6 h-6" />
        <h3 className="my-2.5 mx-0">{chat.title}</h3>
      </div>
      <div className="flex justify-between items-center gap-2.5">
        <PhoneIcon className="w-6 h-6" />
        <p className="my-2.5 mx-0">{chat.description}</p>
      </div>
    </div>
  );
};
export default CustomerHeader;
