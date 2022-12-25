'use client'
import React, { useState } from "react";
import Modal from 'react-modal';
import Image from "next/image";

export default function Downloader({ChangeState,isModalOpen,data,CurrentID,preview,ChangePreview})
{                   
    // assign the data so to be used later
    const ALLdata = data;
    let ID = CurrentID-1;
    const BlogData = ALLdata[ID];
    // current download image blob
    const [current_img_blob,setCurrentImgBlob] = useState(null);

    // fetch image blob from the url
    async function getBlob(url:string){
         const response = await fetch(url)
         return await response.blob()
    }
    // get image blob and create a file url for it
   async function getUrl(url){
        const fileBlob = await getBlob(url)
        setCurrentImgBlob(fileBlob);
        return URL.createObjectURL(fileBlob)
   }
   // copy image to clipboard
   async function copyImg(){
       await navigator.clipboard.write([
       new ClipboardItem({ [current_img_blob.type]: current_img_blob }),
     ])
   }

   async function SetButtonlnk(){
        const link = await getUrl(preview);
        const downloadbtn = document.getElementById("download")
        downloadbtn.setAttribute("href", link)
        downloadbtn.setAttribute("download", "file.png")   
    }
    return (
      <>
        <Modal
          className="modal"
          bodyOpenClassName="no-scroll"
          overlayClassName="modal-overlay"
          isOpen={isModalOpen}
          onRequestClose={() => ChangeState(false)}
        >
          <div className="main_Wrapper">
            <div className="view_wrapper">
              <div className="left_view">
                <div className="img_wrap">
                  <a
                    className="color"
                    onClick={() => ChangePreview(BlogData.color)}
                  >
                    <Image
                      alt={BlogData.title}
                      width={100}
                      height={100}
                      src={BlogData.color}
                      placeholder="empty"
                    />
                  </a>
                  <a
                    className="premium"
                    onClick={() => ChangePreview(BlogData.premium)}
                  >
                    <Image
                      alt={BlogData.title}
                      width={100}
                      height={100}
                      src={BlogData.premium}
                      placeholder="empty"
                    />
                  </a>
                  <a
                    className="gradient"
                    onClick={() => ChangePreview(BlogData.gradient)}
                  >
                    <Image
                      alt={BlogData.title}
                      width={100}
                      height={100}
                      src={BlogData.gradient}
                      placeholder="empty"
                    />
                  </a>
                  <a
                    className="clay"
                    onClick={() => ChangePreview(BlogData.clay)}
                  >
                    <Image
                      alt={BlogData.title}
                      width={100}
                      height={100}
                      src={BlogData.clay}
                      placeholder="empty"
                    />
                  </a>
                </div>
              </div>
              <div className="right_view">
                <div className="main_view">
                  <Image
                    id="current_img"
                    alt={BlogData.title}
                    width={400}
                    height={400}
                    src={preview}
                    placeholder="empty"
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                    onLoad={SetButtonlnk}
                  />
                </div>
              </div>
              <div className="btn_Wrap">
                <div className="meta_wrapper">
                  <div className="logo_Wrap">
                    <img src="/3dicons.png" className="imglogo" />
                  </div>
                  <div className="cpybtn_wrap">
                    <a onClick={copyImg} className="cpy_btn">
                      copy
                    </a>
                  </div>
                  <div className="info_wrapper">
                    <div className="meta">
                      <h3>{BlogData.title}</h3>
                      <p>
                        <span>angle: clay</span> <br />
                        <span>color: clay</span> <br />
                        <span>size: clay</span> <br />
                      </p>
                    </div>
                  </div>
                  <div className="angle_cntrl">
                    <a className="iso">iso</a>
                    <a className="daynmic">daynmic</a>
                    <a className="front">front</a>
                  </div>
                  <div className="btns">
                    <a id="download" className="btn download_btn">
                      download
                    </a>
                    <a className="btn close" onClick={() => ChangeState(false)}>
                      close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </>
    )
}