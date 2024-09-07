// app/context/AppProvider.tsx
'use client'; // This directive ensures that the component is rendered on the client side

import React, { createContext, useState, useRef, ReactNode, useContext } from 'react';

interface AppContextType {
    sharedState: any;
    setSharedState: (state: any) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const timerCookie = useRef(null);
    const windowSizeTrackerRef = useRef(null);
    const mousePositionRef = useRef(null);
    const [sharedState, setSharedState] = useState({
        portfolio: {
            NavBar: {
                IntervalEvent: null,
                scrolling: null,
                scrollSizeY: null,
            },
            Scrolling: {
                IntervalEvent: null
            }
        },
        userdata: {
            timerCookieRef: timerCookie,
            windowSizeTracker: windowSizeTrackerRef,
            mousePositionTracker: mousePositionRef,
        },
        typing: {
            keyboardEvent: null,
            eventInputLostFocus: null,
        },
        finishedLoading: false,
    });

    return (
        <AppContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
