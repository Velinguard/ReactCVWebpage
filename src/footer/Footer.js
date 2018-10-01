import React, { Component } from 'react';
import AUfooter, { AUfooterNav, AUfooterEnd } from './footer.js';




export class Footer extends Component{
    render(){
        return (
            <div class="bp3-running-text .modifier">
                	<AUfooter dark>

<div className="container">

    <AUfooterNav>

        <div className="row">

            <div className="col-md-3 col-sm-6">

                <h3 className="au-display-lg">Section</h3>

                <ul className="au-link-list">

                    <li><a href="#">Link 1</a></li>

                    <li><a href="#">Link 2</a></li>

                    <li><a href="#">Link 3</a></li>

                </ul>

            </div>



            <div className="col-md-3 col-sm-6">

                <h3 className="au-display-lg">Section</h3>

                <ul className="au-link-list">

                    <li><a href="#">Link 1</a></li>

                    <li><a href="#">Link 2</a></li>

                    <li><a href="#">Link 3</a></li>

                </ul>

            </div>



            <div className="col-md-3 col-sm-6">

                <h3 className="au-display-lg">Section</h3>

                <ul className="au-link-list">

                    <li><a href="#">Link 1</a></li>

                    <li><a href="#">Link 2</a></li>

                    <li><a href="#">Link 3</a></li>

                </ul>

            </div>



            <div className="col-md-3 col-sm-6">

                <h3 className="au-display-lg">Section</h3>

                <ul className="au-link-list">

                    <li><a href="#">Link 1</a></li>

                    <li><a href="#">Link 2</a></li>

                    <li><a href="#">Link 3</a></li>

                </ul>

            </div>

        </div>

    </AUfooterNav>



    <AUfooterEnd>

        <div className="row">

            <div className="col-sm-12">

                <p>Footer text</p>



                <img className="au-responsive-media-img" src="http://placehold.it/157x80" alt="Commonwealth Coat of Arms crest logo" />



                <p><small>&copy; Commonwealth of Australia, <a href="https://github.com/govau/uikit/blob/master/LICENSE.md" rel="external license">MIT licensed</a></small></p>

            </div>

        </div>

    </AUfooterEnd>

</div>

</AUfooter>

            </div>
        )
    }
}