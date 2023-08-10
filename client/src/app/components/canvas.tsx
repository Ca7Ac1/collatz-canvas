import React from 'react'
import { LineChart, Line, ResponsiveContainer } from "recharts";

export type CanvasData = {
    sequenceNum: number
}

type CanvasProps = {
    collatzNumbers: Array<CanvasData>
};

export function Canvas(props: CanvasProps) {
    return (
        <div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={props.collatzNumbers}>
                    <Line type="monotone" dataKey="sequenceNum" stroke="#8884d8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}