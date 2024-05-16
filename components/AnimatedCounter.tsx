'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <CountUp
            end={amount}
            duration={2.75}
            decimals={2}
            decimal=','
            prefix='$'
        />
    )
}

export default AnimatedCounter