import React from "react";
import { Button } from "react-bootstrap";

export class About extends React.Component {
    render(): React.ReactNode {
        return <div>
            <h3 id="about">Hi!</h3>
            <p>hello to my web site' i wish that you will enjoy!!</p><br></br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.149878283882!2d35.04341368499326!3d31.92968798123609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d29f874b2af9%3A0x9f59dd8a7c6dfa64!2z16nXkNeS16og15DXqNeZ15QgMjEsINee15XXk9eZ16LXmdefINei15nXnNeZ16o!5e0!3m2!1siw!2sil!4v1667776206584!5m2!1siw!2sil" 
            width="600" height="450" /*style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"*/></iframe>
        </div>
    }
}



