import React, { useState } from 'react'
import { Menu } from './menu'
import { Loader } from './load'
import { Canvas, CanvasData } from './canvas'


type ManagerProps = {

};

type ManagerState = {
    awaitingInput: boolean
    loading: boolean
    collatzSequence: Array<CanvasData>
};

export class Manager extends React.Component<ManagerProps, ManagerState> {
    constructor(props: ManagerProps) {
        super(props);

        this.state = {
            awaitingInput: true,
            loading: false,
            collatzSequence: []
        };
    }

    reset(): void {
        this.setState({
            awaitingInput: true,
            loading: false,
            collatzSequence: []
        });
    }

    setLoading(): void {
        this.setState({
            awaitingInput: false,
            loading: true,
            collatzSequence: []
        });
    }

    displayCanvas(collatzValues: Array<number>): void {
        this.setState({
            awaitingInput: false,
            loading: false,
            collatzSequence: collatzValues.map((collatzValue, idx) => {
                return {value: collatzValue, sequenceIdx: idx}
            })
        });
    }

    render() {
        if (this.state.awaitingInput) {
            return (
                <main>
                    <Menu loadCallback={() => {
                        this.setLoading();
                    }} displayCallback={(collatzValues: Array<number>) => {
                        this.displayCanvas(collatzValues)
                    }} />
                </main>
            )
        }

        if (this.state.loading) {
            return (
                <main>
                    <Loader />
                </main>
            )
        }

        return (
            <main>
                <div style={{color: "teal"}}>
                    <button onClick={() => { this.reset() }}> Back </button>
                </div>
                <Canvas collatzNumbers={this.state.collatzSequence} />
            </main>
        )
    }
}