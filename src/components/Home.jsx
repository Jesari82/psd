




function Home() {

    return (
        <div className="flex justify-between mt-7">
            <div className="m-10">
                <div className="mb-16">
                    <h1 className="font-extrabold text-3xl mb-5">Hello, I’m <br/>
                    Brooklyn Gilbert</h1>
                    <p>I'm a Freelance UI/UX Designer and Developer based in London,England.<br/>
                         I strives to build immersive and beautiful web applications through <br/>
                         carefully crafted code and user-centric design.</p>
                    <button className="bg-purple-500 hover:bg-slate-300 rounded-md mt-4 p-1">Say Hello !</button>
                </div>
                <div className="flex justify-center gap-2">
                    <div className="flex flex-col bg-purple-200 rounded-md p-1">
                        <span>15 Y.</span>
                        <span>Expirience</span>
                    </div>
                    <div className="flex flex-col bg-purple-200 rounded-md p-1">
                        <span>250+</span>
                        <span>Projects completed</span>
                    </div>
                    <div className="flex flex-col bg-purple-200 rounded-md p-1">
                        <span>58</span>
                        <span>Happy Clients</span>
                    </div>
                </div>
            </div>
            <div>
                <img src="https://neweralive.na/wp-content/uploads/2024/06/lloyd-sikeba.jpg" alt="Brooklyn Gilbert" className="h-96 rounded-md" />
            </div>
        </div>
    );
    }

export default Home;