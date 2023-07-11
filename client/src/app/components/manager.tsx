import React, { useState } from 'react'
import { Menu } from './menu'
import { Loader } from './load'


type ManagerProps = {

};

type ManagerState = {
    loading: boolean
};

export class Manager extends React.Component<ManagerProps, ManagerState> {
    constructor(props: ManagerProps) {
        super(props);

        this.state = { loading: false };
    }

    flipLoad(num: number): void {
        console.log(num);

        this.setState({
            loading: !this.state.loading
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <main>
                    <Loader />
                </main>
            )
        }

        return (
            <main>
                <Menu textCallback={(num: number) => {
                    this.flipLoad(num);
                }} />
            </main>
        )
    }
}