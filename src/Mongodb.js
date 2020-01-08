import React, { Component } from 'react';
import axios from 'axios';

class Mongodb extends Component {
    // initialize our state

    // here is our UI
    // it is easy to understand their functions when you
    // see them render into our screen
    render() {
        const { data } = this.state;
        return (
            <div>
                <div style={{ padding: '10px' }}>
                    <input
                        type="text"
                        style={{ width: '200px' }}
                    />
                    <input
                        type="text"
                        onChange={(e) => this.setState({ sub_title: e.target.value })}
                        placeholder="A film alcíme..."
                        style={{ width: '200px' }}
                    />
                    <input
                        type="text"

                        style={{ width: '200px' }}
                    />
                    <input
                        type="text"

                        style={{ width: '200px' }}
                    />
                    <button onClick={() => this.putDataToDB()}>
                        ADD
                    </button>
                </div>
                <div style={{ padding: '10px' }}>
                    <input
                        type="text"
                        style={{ width: '200px' }}
                        onChange={(e) => this.setState({ idToDelete: e.target.value })}
                        placeholder="put id of item to delete here"
                    />
                </div>
                <div style={{ padding: '10px' }}>
                    <input
                        type="text"
                        style={{ width: '200px' }}
                        onChange={(e) => this.setState({ idToUpdate: e.target.value })}
                        placeholder="id of item to update here"
                    />
                    <input
                        type="text"
                        style={{ width: '200px' }}
                        onChange={(e) => this.setState({ updateToApply: e.target.value })}
                        placeholder="put new value of the item here"
                    />
                    <button
                        onClick={() =>
                            this.updateDB(this.state.idToUpdate, this.state.updateToApply)
                        }
                    >
                        UPDATE
                    </button>
                </div>
            </div>
        );
    }
}

export default Mongodb;