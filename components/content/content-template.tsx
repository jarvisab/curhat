// ContentBoilerplate.tsx
"use client"

import { MenuBar } from '../layout/menu-bar';
import Content from './content-item';
import { SkeletonLoad } from './skeleton-content';
import useContentBoilerplate from './useContentTemplate';

export default function ContentBoilerplate() {
    const {
        browsedMessages,
        currentMessageIndex,
        handlePrevious,
        handleNext,
    } = useContentBoilerplate();

    return (
        <div className="relative w-full mb-28">
            {browsedMessages.length === 0 ? (
                <SkeletonLoad/>
            ) : (
                <>
                    <Content message={browsedMessages[currentMessageIndex]} />
                </>
            )}
            <MenuBar
                handlePrevious={handlePrevious}
                handleNext={handleNext}
                currentMessageIndex={currentMessageIndex}
                browsedMessagesLength={browsedMessages.length - 1} />
        </div>
    )
}