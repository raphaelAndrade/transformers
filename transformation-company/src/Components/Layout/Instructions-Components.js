import React from 'react';

const Instructions = () => {
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Instructions</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            The Transformers are at war and you are in charge of settling the score!
                            The power is in your hand to decide the future of Cybertron.
                        </p>
                        <ul>
                            <li>1) Add the name of your transformer and choose your team.</li>
                            <li>2) Add your Transformer's skill points. The points range from 1 to 10.</li>
                            <li>3) Click the add fighter button. You can add as many fighters as you want.</li>
                            <li>4) Click on the "Fight" button and watch the result of that battle.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Instructions;