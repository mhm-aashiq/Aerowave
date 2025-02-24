import React from 'react'
import {VectorMap} from '@react-jvectormap/core'
import {worldMill} from '@react-jvectormap/world'
import {countries} from './Countries'
import {colorScale} from './Countries'
import './WorldMap.css'

const WorldMap = () => {
  return (
    <div className='container-map'>
      <VectorMap map={worldMill} className='vectormap'backgroundColor='#f0f8ff'
        series={{
          regions:[
            {
              scale: colorScale,
              values: countries,
              min: 0,
              max:100,

            }
          ]
        }}
      
      >
     
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "black",
            fontSize: "24px",
            fontWeight: "bold",
            textShadow: "1px 1px 1px black",
            
          }}
        >
          Hello, World!
        </div>
      </VectorMap>
    </div>
  )
}

export default WorldMap