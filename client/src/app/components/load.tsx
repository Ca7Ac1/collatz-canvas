import React from 'react'

export function Loader() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div className="loading-spinner">
            </div>
        </div>
    )
}