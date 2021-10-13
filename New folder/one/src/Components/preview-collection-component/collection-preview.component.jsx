import React from 'react'

import './collection-preview.component.stylesheet.scss';

import CollectionItem from '../collections-items/collection-items.components';

const CollectionPreview = ({ title, items }) => (

    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, idx) => idx < 4)
                .map(({ id, ...otheritemprops }) => (

                    <CollectionItem key={id} {...otheritemprops} />

                ))}
        </div>
    </div>

);

export default CollectionPreview;

