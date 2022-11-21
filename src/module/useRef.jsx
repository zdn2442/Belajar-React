import React, {useRef} from 'react'

export default function RefTutor() {
    const inputRef = useRef(null)
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const topRef = useRef(null)

    // const onClick = () => {
    //     console.log(inputRef.current.value);
    //     console.log('ref input => ', inputRef.current);
    //     inputRef.current.focus();
    //     inputRef.current.value = "Kal'tsit"
    //     // inputRef.current.type = "color"
        
    // }


    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            // left :-100,
            behavior: "smooth"
        })
    }
    const scrollToTop = (ref) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return(
        <React.Fragment>
            {/* <h1>Kal</h1>
            <input ref={inputRef} type={"text"} placeholder='Please Login'/>
            <button onClick={onClick}>Change Name</button> */}
            <div >
                <div className="space-x-5 fixed bg-white w-screen">
                    <button onClick={() => {
                        // scrollToSection(homeRef)
                        scrollToTop(homeRef)
                    }}>
                        Home
                    </button>
                    <button onClick={() => {
                        scrollToSection(aboutRef)
                    }}>
                        About
                    </button>
                </div>
                <div ref={homeRef} className="h-screen w-full bg-purple-500 pt-10">
                    <h1 className='text-blue-400'>Home</h1>
                </div>
                <div ref={aboutRef} className="h-screen w-full bg-slate-500 pt-10">
                    <h1 className='text-red-500'>About</h1>
                </div>
                <button onClick={() => {
                    scrollToTop(topRef)
                }} className='fixed bg-white cursor-pointer z-10 bottom-2 right-5 w-24 h-5 text-center rounded'>
                    back to top
                </button>
            </div>
        </React.Fragment>
    )
}