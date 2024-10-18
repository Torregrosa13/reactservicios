import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul id='menurutas'>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/tabla/21'>TablaMultiplicar 21</a>
            </li>
            <li>
                <a href='/tabla/13'>TablaMultiplicar 13</a>
            </li>
            <li>
                <a href='/tabla/2'>TablaMultiplicar 2</a>
            </li>
            <li>
                <a href='/tabla/836356'>TablaMultiplicar 836356</a>
            </li>
            <li>
                <a href='/noexisto'>Sin ruta</a>
            </li>
        </ul>
      </div>
    )
  }
}
