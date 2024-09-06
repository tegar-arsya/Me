// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types'; // Import PropTypes

const Reveal = ({ children, width = 'fit-content' }) => {

    const ref = useRef(null)

    const isInView = useInView(ref, { once: true, amount: 0.3 })

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

            <motion.div
            variants={{
                // Variants here
            }}
            >
                {children}
            </motion.div>
            
        </div>
    )
}

Reveal.propTypes = {
    children: PropTypes.node,
    width: PropTypes.string,
};

export default Reveal;