
'use client'
import Downloader from "./Modal"
import Image from "next/image"
import { useState } from "react"


/**
 * renders the icon bar
 * @param {Array} data- contains the list of icons as url and it's metadata  
 */
export default function IconBar({data})
{
    // Manage Modal states and elements id
    const [isModalOpen, SetModalState] = useState(false);
    const [CurrentImg,ChangeCurrentImg] = useState(null);
    const [CurrentID, ChangeID] = useState(1);
    
    // required props to be passed in the modal element
    const props = {
        data:data,
        CurrentID:CurrentID,
        isModalOpen:isModalOpen,
        ChangeState:SetModalState,
        preview:CurrentImg,
        ChangePreview:ChangeCurrentImg
    }
    // the required props for the Icon that render the each icons
     const iconsprops = {
        data:data,
        ChangeId:ChangeID,
        ChangeModalState:SetModalState,
        ChangeImgUrl:ChangeCurrentImg
    }

    return(
      <section className="all-icons">
        <Downloader {...props}/>
        <div className="container" >
          <div className="icons-wrap">
            <h2 className="gradient blue">120+ icons Preview</h2>
            <p>1440+ Rendered Images</p>
            <div className="icons-grid" >
              <Icons {...iconsprops}/>
            </div>
          </div>
        </div>
      </section>)
}

/**
 * map and render every each Icons from the list
 * @param {Array} data - contains list of icons as url and its meta data
 * @param ChangeState
 */
function Icons({data,ChangeModalState,ChangeId,ChangeImgUrl})
{

  // handel the clicks on the icons
  const handleClick = (event) => {
      // gets the id of clicked element
      const key = event.currentTarget.id;
      ChangeId(key);
      ChangeImgUrl(data[key-1].color) 
      // Show the modal on the screen by changing it's state to true
      ChangeModalState(true);
      // Chnage the Id to current id of clicked element
  };

    return(
      <>
      {data.map(node => {
          const title = node.title
          return (
              <>
              <div className="icons-box" id={node.id} onClick={handleClick}>
                  <div className="i-wrap">
                  <div className="img-ani">
                      <div className="img-list" >
                      <Image
                          alt={node.title}
                          fill={true}
                          quality={75}
                          src={node.gradient}
                          className="gradient"
                           sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                      />
                      <Image
                          alt={node.title}
                          fill={true}
                          quality={75}
                          src={node.clay}
                          className="clay"
                           sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                      />
                      <Image
                          alt={node.title}
                          fill={true}
                          quality={75}
                          src={node.color}
                          className="color"
                           sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                      />
                      <Image
                          alt={node.title}
                          fill={true}
                          quality={75}
                          src={node.premium}
                          className="premium"
                           sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"
                      />
                      </div>
                  </div>
                  </div>
              </div>
              </>
          )
          })}
      </>
      )
}