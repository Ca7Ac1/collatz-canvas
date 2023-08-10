import React from 'react'
import { ResponsiveContainer, LineChart, Line, YAxis, Tooltip } from "recharts";

export type CanvasData = {
    value: number
    sequenceIdx: number
}

type CanvasProps = {
    collatzNumbers: Array<CanvasData>
};

export function Canvas(props: CanvasProps) {
    return (
        <div>
            <ResponsiveContainer width="95%" height={600}>
                <LineChart data={props.collatzNumbers}>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" animationDuration={10009} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}