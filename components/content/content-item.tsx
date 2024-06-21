import parse from 'html-react-parser';

import { monthNames } from '@/app/contents';

interface Message {
    id: string;
    title: string;
    creator: string;
    message: string;
    createdAt: string;
}

interface ContentProps {
    message: Message;
}

const Content: React.FC<ContentProps> = ({ message }) => (
    <div className="w-full text-wrap break-words">
        <h2 className="text-xl font-bold mt-2">{message.title}</h2>
        <h3 className="text-sm text-gray-500 mt-1">oleh {message.creator} pada <b>{
            convertUTCDateToLocalDateString(message.createdAt)
        }</b>
        </h3>
        <div className="mt-4 overflow-y-auto max-h-[calc(100%-10rem)]">
            {parse(message.message)}
        </div>
    </div>
);

function convertUTCDateToLocalDateString(utcDateString: string): string {

    const date = new Date(utcDateString + 'Z');

    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${year} - ${hours}:${minutes}`;
}

export default Content;
