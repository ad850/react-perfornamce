import React from 'react'
import Card from './Card';
import List from './List';


const Cardlist = () => {
    return (
        <div >

            {

                List.map((val, index) => {

                    const {id,image,title,sname}= val;

                    return <Card key={id} image={image} title={title} heading={sname} />

                })

            }

        </div>
    )
}

export default Cardlist
