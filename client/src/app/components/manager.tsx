import React, { useState } from 'react'
import { Menu } from './menu'
import { Loader } from './load'
import { Canvas } from './canvas'


type ManagerProps = {

};

type ManagerState = {
    awaitingInput: boolean
    loading: boolean
    canvasValues: Array<number>
};

export class Manager extends React.Component<ManagerProps, ManagerState> {
    constructor(props: ManagerProps) {
        super(props);

        this.state = {
            awaitingInput: true,
            loading: false,
            canvasValues: []
        };
    }

    setLoading(): void {
        this.setState({
            awaitingInput: false,
            loading: true,
            canvasValues: []
        });
    }

    displayCanvas(collatzValues: Array<number>): void {
        this.setState({
            awaitingInput: false,
            loading: false,
            canvasValues: collatzValues
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
                <Canvas collatzNumbers={this.state.canvasValues} />
            </main>
        )
    }
}