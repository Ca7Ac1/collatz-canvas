import React from 'react'

type CanvasProps = {
    collatzNumbers: Array<number>
};

export function Canvas(props: CanvasProps) {
    return (
        <div >
            <p>
                {props.collatzNumbers}
            </p>
        </div>
    )
}