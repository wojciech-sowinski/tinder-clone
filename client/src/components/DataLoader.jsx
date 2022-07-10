import Loader from "react-js-loader";
import '../styles/dataLoader.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { divContainerVariants } from '../animations/motion'

const DataLoader = ({ text }) => {
    return (
        <div className="data-loader">
            <AnimatePresence>
                <motion.div
                    className="loader-icon"
                    key={"loadericonskey"}
                    variants={divContainerVariants}
                    initial='hidden'
                    animate='visible'
                    exit='exit'>
                    <Loader type="bubble-loop" bgColor={"rgb(201, 0, 50)"} title={(text ? text : "loading")} color={'#afafaf'} size={100} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default DataLoader;