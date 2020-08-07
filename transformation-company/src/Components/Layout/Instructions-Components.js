import React from 'react';
import { Consumer } from '../Context/Context';

function Instructions() {
    return(
        <Consumer>
            {value => {
                const {fighters} = value;
                console.log(fighters);
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
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                                    </p>
                                    <p>
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        </Consumer>
        
    )
}
export default Instructions;