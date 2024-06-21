// useContentBoilerplate.ts
import { useState, useEffect } from 'react';
import { getMessagesFromIDS, getMaxID } from "@/actions/get-messages";

const COUNT_OF_DATA_TO_GET = 10;

const useContentBoilerplate = () => {
    const [browsedMessages, setBrowsedMessages] = useState<any[]>([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const getRandomDatas = async () => {
        const random_ids: number[] = [];
        const newVisitedIds = new Set();

        let maxId: number | null | undefined = await getMaxID();
        do {
            maxId = await getMaxID();
        } while (maxId === null || maxId === undefined);

        for (let i = 0; i < COUNT_OF_DATA_TO_GET; i++) {
            let random_id: number;
            do {
                random_id = Math.floor(Math.random() * maxId) + 1;
            } while (newVisitedIds.has(random_id));
            random_ids.push(random_id);
            newVisitedIds.add(random_id);
        }


        const messagesArray = await getMessagesFromIDS(random_ids);

        if (messagesArray) {
            messagesArray.forEach(message => {
                if (message) {
                    setBrowsedMessages((prevState: any[]) => [...prevState, message]);
                }
            });
        }
    };

    useEffect(() => {
        getRandomDatas();
    }, []);

    const handlePrevious = () => {
        scrollToTop();
        setCurrentMessageIndex((prevIndex) => prevIndex - 1);
    };

    const handleNext = () => {
        scrollToTop();
        setCurrentMessageIndex((prevIndex) => prevIndex + 1);
        if ((browsedMessages.length - 2) === currentMessageIndex) {
            getRandomDatas();
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return {
        browsedMessages,
        currentMessageIndex,
        handlePrevious,
        handleNext,
        scrollToTop
    };
};

export default useContentBoilerplate;