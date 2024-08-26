import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <div className="bg-primary-color flex flex-col md:flex-row   text-center md:justify-around text-white py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Copyright © 2023{" "}
          <Link to="home" smooth>
            <span className="underline hover:no-underline text-hover-color cursor-pointer">
              Usama
            </span>
          </Link>
          . All Rights Reserved.
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Designed by
          <span className="underline hover:no-underline text-hover-color">
            {" "}
            Harnish Design
          </span>
        </motion.div>
      </div>
    </>
  );
}

export default Footer;
