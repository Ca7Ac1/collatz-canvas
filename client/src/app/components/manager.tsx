import React, { useState } from 'react'
import { Menu } from './menu'
import { Loader } from './load'


type ManagerProps = {

};

type ManagerState = {
    awaitingInput: boolean
    loading: boolean
    canvasValue: number
};

export class Manager extends React.Component<ManagerProps, ManagerState> {
    constructor(props: ManagerProps) {
        super(props);

        this.state = {
            awaitingInput: true,
            loading: false,
            canvasValue: 0
        };
    }

    setLoading(): void {
        this.setState({
            awaitingInput: false,
            loading: true
        });
    }

    displayCanvas(inputVal: number): void {
        this.setState({
            awaitingInput: false,
            loading: false,
            canvasValue: inputVal
        });
    }

    render() {
        if (this.state.awaitingInput) {
            return (
                <main>
                    <Menu loadCallback={() => {
                        this.setLoading();
                    }} displayCallback={(inputVal: number) => {
                        this.displayCanvas(inputVal)
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

            </main>
        )
    }
}