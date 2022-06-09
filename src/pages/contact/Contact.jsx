import { motion } from "framer-motion"
import View from "../../components/View"
import './contact.css'

const Contact = () => {
    return (
        <View>
            <div className= 'contact-info'>
                <motion.p>
                Can contact with me at: <motion.p className= 'email' whileHover = {{scale: 1.1}}>emryigit97@gmail.com</motion.p><br/>
                I'll reply as soon as possible.<br/>
                Have a good day 
                </motion.p>
            </div>
        </View>
    )
}

export default Contact