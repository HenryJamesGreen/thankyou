/* eslint-disable */
import './Home.css'


export default function Home() {
    return(
        <>
        <div className="jumbo-div">
            <h2 className='intro'> Your favourite bootcamp class wants to say </h2>
            <h3 className="thanks-type">thank you!</h3>
        </div>
        <div className='wrapper'>
        <div className='body'>
            <h2 className='header'> To Nirmeet, Chelsea, Chadrick, John, Austin, Other Austin, Lee, Matthew, Paul and Laura</h2>
                <p className='message'>we've knocked up a quick something to let you all know how grateful we are for all of your help on this journey.
        <br /> <br />
                We couldn't have done it without you. 
                <br /> <br />
                We owe you a million thank yous. But that would take too long so {/*put a link here to thanks page*/}here's just a few.
                </p>
        </div>
        </div>
    </> )
}