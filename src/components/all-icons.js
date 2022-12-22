
// All Icons
// 24 Aug, 21
import React from "react"
// import { useState, useRef } from "react";
import {getSortedPostsData} from "../templates/icons-list";
import Downloader from "./Modal";
import IconBar from "./icon-bar";
const AllIcons = () => {
    const data = getSortedPostsData();
    return <IconBar data ={data}/>
}

export default AllIcons
