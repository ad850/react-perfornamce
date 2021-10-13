
import React, { Component } from 'react';

import MenuItem from '../menu-items/menu.item.components';

import './directory.component.scss';

class Directory extends Component {

    constructor() {

        super();

        this.state = {

            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkurl: 'hats',
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkurl: ""
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkurl: ""
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkurl: ""
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkurl: ""
                }
            ]
        };
    }


    render() {
        return (
            <div className="directory-menu">

                {

                    this.state.sections.map(({ id, ...otherprops }) => {

                        return <MenuItem key={id} {...otherprops} />
                    })

                }

            </div>
        )
    }
}

export default Directory;