// Original author: Leonardo Moura Leitão (with adaptations)
// Contact: https://www.udemy.com/user/leonardomouraleitao/
import React from 'react'

interface IContadorValorProps { 
    contador: number
}

export default (props: IContadorValorProps) =>
    <p>{props.contador}</p>
    