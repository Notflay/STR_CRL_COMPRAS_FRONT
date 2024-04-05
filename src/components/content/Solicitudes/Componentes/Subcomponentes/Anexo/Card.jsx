import React from 'react'

export default function Card({file,eliminarAdjunto}) {

    

    return (
        <>
        <div className="p-fileupload-row cursor-pointer"  data-pc-section="file">
            {(file.type== "image/jpeg")|(file.type=="image/png")?
            (
                <img
                role="presentation"
                class="p-fileupload-file-thumbnail"
                src={file.objectURL}
                width="50"
                data-pc-section="thum bnail"
                alt={file.name}
              />
            ):(
                <></>
            )
        }
        <div data pc-section="details" style={{textAlign:"left"}}>
            <div class="p-fileupload-filename" data-pc-section="filname">
                
            </div>
        </div>
        </div>
            
        </>
    )
}
