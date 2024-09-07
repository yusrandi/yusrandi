'use client'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import { useEffect } from 'react';
import { useAppContext } from '@/components/AppContextFolder/AppProvider'; // Adjust the import path
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Startup from '@/components/Header/StartupLogo/Startup';
import { useRef } from 'react';
import MyName from '@/home/my-name/MyName';
import { motion } from "framer-motion";
import SocialMediaEmail from '@/home/social-media-arround/SocialMediaArround';
import AboutMe from '@/home/about-me/AboutMe';
import WhereIHaveWorked from '@/home/experience/WhereIHaveWorked';
import SomethingIveBuilt from '@/home/work/SomethingIveBuilt';
import GetInTouch from '@/home/contact/GetInTouch';
import Footer from '@/components/Footer/Footer';



export default function Home() {
  const context = useAppContext();

  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }

    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 4000);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <main className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
      {/* {context.sharedState.finishedLoading ? <></> : ShowElement ? <Startup /> : <></>} */}
      <Header finishedLoading={context.sharedState.finishedLoading} sectionsRef={homeRef} />
      <MyName finishedLoading={context.sharedState.finishedLoading} />
      <SocialMediaEmail finishedLoading={context.sharedState.finishedLoading} />
      {context.sharedState.finishedLoading ? <AboutMe ref={aboutRef} /> : <></>}
      {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
      {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
      {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
      {context.sharedState.finishedLoading ? (
        <Footer githubUrl={"https://github.com/hktitof/my-website"} hideSocialsInDesktop={true} />
      ) : (
        <></>
      )}
      <div
        className="h-full flex flex-col justify-center px-8 2xl:px-72 xl:px-56 lg:px-32  md:px-28 sm:px-8 py-32 sm:py-52"></div>
    </main>
  )
}
