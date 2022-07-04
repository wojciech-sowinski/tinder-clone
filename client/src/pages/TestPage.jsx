import { motion, AnimatePresence, useAnimation } from "framer-motion"
import SliderWithThumb from "../components/SliderWithThumb"

const TestPage = (props) => {


    const renderList = () => {
        const list = []
        for (let index = 1; index < 100; index++) {
            list.push(
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },

                    }}
                >
                    <h1>test</h1>
                </motion.div>
            )
        }

        return list

    }

    return (
        <div className="test-page">

        </div>
    );
}

export default TestPage;