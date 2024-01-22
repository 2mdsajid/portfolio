'use client'
import { useEffect, useState } from 'react';

type Props = {};

const Rocket = (props: Props) => {
    const BASEURL = '/rocket';
    const [scroll, setScroll] = useState(0);
    const [totalScrollHeight, setTotalScrollHeight] = useState(document.documentElement.scrollHeight);
    const [marginTop1, setMarginTop1] = useState<number>(0);
    const [marginTop2, setMarginTop2] = useState<number>(0);
    const [marginTop3, setMarginTop3] = useState<number>(0);
    const [marginTop4, setMarginTop4] = useState<number>(0);
    const [marginTop5, setMarginTop5] = useState<number>(0);
    const [marginTop6, setMarginTop6] = useState<number>(0);

    const [topMargin, setTopMargin] = useState(60)
    const [imageWidth, setImageWidth] = useState(2.5) //in rem 

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight
            setScroll(scrollPosition);

            setTopMargin((scrollPosition / totalScrollHeight) * windowHeight + 60)
            setImageWidth(2.5 - (scrollPosition / totalScrollHeight) * 2.5);

            const scrollHeight20 = totalScrollHeight * 0.22;
            const scrollHeight30 = totalScrollHeight * 0.33;
            const scrollHeight40 = totalScrollHeight * 0.44;
            const scrollHeight50 = totalScrollHeight * 0.55;
            const scrollHeight60 = totalScrollHeight * 0.66;


            setMarginTop6(scrollPosition / 40);
            setMarginTop5(scrollPosition > scrollHeight20 && scrollPosition <= scrollHeight30 ? scrollPosition / 75 : 0);
            setMarginTop4(scrollPosition > scrollHeight30 && scrollPosition <= scrollHeight40 ? scrollPosition / 90 : 0);
            setMarginTop3(scrollPosition > scrollHeight40 && scrollPosition <= scrollHeight50 ? scrollPosition / 125 : 0);
            setMarginTop2(scrollPosition > scrollHeight50 && scrollPosition <= scrollHeight60 ? scrollPosition / 140 : 0);
            setMarginTop1(scrollPosition > scrollHeight60 ? scrollPosition / 165 : 0);
        };

        const handleResize = () => {
            setTotalScrollHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [totalScrollHeight]);


    return (
        <div className={`fixed z-50 right-2 lg:right-10  flex flex-col items-center`} style={{ bottom: `${topMargin}px` }} >
            <img
                className={` mx-auto w-10 ${scroll > totalScrollHeight * 0.6 && 'hidden'}`}
                style={{ marginTop: `${marginTop1}px`, transition: 'margin 0.01s ease-in' }}
                src={`${BASEURL}/r1.png`} alt="rocket 1" />
            <img
                className={` mx-auto w-10 ${scroll > totalScrollHeight * 0.7 && 'hidden'}`}
                style={{ marginTop: `${marginTop2}px`, transition: 'margin 0.01s ease-in' }}
                src={`${BASEURL}/r2.png`} alt="rocket 2" />
            <img
                className={` mx-auto w-10 ${scroll > totalScrollHeight * 0.5 && 'hidden'}`}
                style={{ marginTop: `${marginTop3}px`, transition: 'margin 0.01s ease-in' }}
                src={`${BASEURL}/r3.png`} alt="rocket 3" />
            <img
                className={` mx-auto w-10 ${scroll > totalScrollHeight * 0.4 && 'hidden'}`}
                style={{ marginTop: `${marginTop4}px`, transition: 'margin 0.01s ease-in' }}
                src={`${BASEURL}/r4.png`} alt="rocket 4" />
            <img
                className={` mx-auto w-10 ${scroll > totalScrollHeight * 0.3 && 'hidden'}`}
                style={{ marginTop: `${marginTop5}px`, transition: 'margin 0.01s ease-in' }}
                src={`${BASEURL}/r5.png`} alt="rocket 5" />
            <img
                className={` mx-auto w-10 ${scroll > totalScrollHeight * 0.2 && 'hidden'}`}
                style={{ marginTop: `${marginTop6}px`, transition: 'margin 0.01s ease-in' }}
                src={`${BASEURL}/r6.png`} alt="rocket 6" />
            <div className={` pr-1 w-10 mx-auto rotate-180 ${scroll > totalScrollHeight * 0.7 && 'hidden'}`}>
                <img
                    className='mx-auto'
                    src={`${BASEURL}/fire.gif`}
                    style={{ width: `${imageWidth}rem` }}
                />
            </div>
        </div >
    );
};

export default Rocket;
