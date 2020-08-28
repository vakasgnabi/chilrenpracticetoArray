import React from 'react';
import ReactDOM from 'react-dom';



const FirstChildOnly = ({ children }) => {
    return (
        <div>
            {React.Children.toArray(children).slice(0, 1)}
        </div>
    )

}

const LastChildOnly = ({ children }) => {
    return (
        <div>
            {React.Children.toArray(children).slice(-1)[0] || null}
        </div>
    )
}

const Head = ({number, children})=>{
    return(
        <div>
            {React.Children.toArray(children).slice(0,number) || null}
        </div>
    )

}

const Tail=({numb,children})=>{
    return(
        <div>
            {React.Children.toArray(children).slice(-numb) || null}
        </div>
    )
}


function Demo() {
    return (
        <>
            <FirstChildOnly>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </FirstChildOnly>
            <br />
            <LastChildOnly>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </LastChildOnly>
            <br />
            <Head number={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
            </Head>
            <br />
            <Tail numb={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
            </Tail>
        </>
    )
}


ReactDOM.render(<Demo />, document.querySelector('#root'));