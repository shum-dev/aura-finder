/* eslint-disable */
import React from 'react';

import ExpandableProperty from './ExpandableProperty';

import '../../styles/RecursiveProperty.css'

const RecursiveProperty = ({ prop, propName, rootProp }) => {
  const isLeaf = (prop) => {
    return (
      typeof prop === 'number' ||
      typeof prop === 'string' ||
      typeof prop === 'boolean'
    )
  };

  return(
    <div className="RecursiveProperty">
      { prop ?
          (isLeaf(prop) ? (
            <div className="RecursiveProperty-row">
              <span>{propName}: </span>
              {prop.toString()}
            </div>
          ) : (
            <ExpandableProperty title={propName} expanded={!!rootProp}>
              { Object.values(prop).map((item, index, { length }) => (
                <RecursiveProperty
                  key={index}
                  prop={item}
                  propName={Object.getOwnPropertyNames(prop)[index]}
                />
              ))}
            </ExpandableProperty>
          )
      ) : (
        <>
          <span>{propName}:</span>
          {`<empty>`}
        </>
      )}
    </div>
  );
}

export default RecursiveProperty;