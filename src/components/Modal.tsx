'use client'
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Modal from 'react-modal';
import Image from "next/image";


export default function Downloader({ChangeState,isModalOpen,data,CurrentID,preview,ChangePreview})
{                   
    // assign the data so to be used later
    const ALLdata = data;
    let ID = CurrentID-1;
    const BlogData = ALLdata[ID];
    
    return( 
    <>
      <Modal className="modal" bodyOpenClassName="no-scroll"  isOpen={isModalOpen} onRequestClose={() => ChangeState(false)}>
        <div className="main_Wrapper">
        <div className="view_wrapper">
            <div className="left_view">    
                <div className="img_wrap">
                    <a onClick={()=> ChangePreview(BlogData.color)}>
                     <Image
                        alt={BlogData.title}
                        width={100}
                        height={100}
                        src={BlogData.color}
                        placeholder = 'empty'
                    />
                    </a>
                    <a onClick={()=> ChangePreview(BlogData.premium)}>
                     <Image
                        alt={BlogData.title}
                        width={100}
                        height={100}
                        src={BlogData.premium}
                        placeholder = 'empty'
                    />
                    </a>
                     <a onClick={()=> ChangePreview(BlogData.gradient)} >
                     <Image
                        alt={BlogData.title}
                        width={100}
                        height={100}
                        src={BlogData.gradient}
                        placeholder = 'empty'
                    />
                    </a> 
                    <a onClick={()=> ChangePreview(BlogData.clay)}>
                     <Image
                        alt={BlogData.title}
                        width={100}
                        height={100}
                        src={BlogData.clay}
                        placeholder = 'empty'
                    />
                    </a>

                </div>
            </div>
            <div className="right_view">
                <div className="main_view">
                    <Image
                        alt={BlogData.title}
                        width={400}
                        height={400}
                        src={preview}
                        placeholder = 'empty'
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={true}
                    />
                </div>
            </div>
            <div className="meta_Wrap">
                <div className="downloader">
                    <h1>
                        3d
                    </h1>
                    <div className="btns">
                        <a>
                        download
                        </a>
                        <a onClick={() => ChangeState(false)}>
                            close
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </Modal>
    </>);
}