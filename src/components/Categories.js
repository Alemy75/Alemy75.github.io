import React, {Component} from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'trash-bins-1',
                    name: 'Урны 1 категории'
                },
                {
                    key: 'trash-bins-2',
                    name: 'Урны 2 категории'
                },
                {
                    key: 'trash-bins-3',
                    name: 'Урны 3 категории'
                }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories