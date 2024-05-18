import { FC } from "react";
import { M2MaxElements } from "./AppleM2Max";

export const AppleM2Ultra:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <div className="text-placeholder"></div>
          <div className="text-string">
            <span className="apple-logo"></span>
            <span className="chip-name">M2 ULTRA</span>
          </div>
          <div className="text-placeholder"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="chip-bg dark-bg">
      <div className="main-container frame-m2ultra">
        <div className="ultra-chip-frame">
          <div className="chip-main">

            <div className="frame-item-m2-max">
              <div className="chip-frame">
                <M2MaxElements showChipName={false} />
              </div>
            </div>

          </div>
          <div className="chip-name">
            <ChipName />
          </div>
          <div className="chip-main-reverse">
            
            <div className="frame-item-m2-max">
              <div className="chip-frame">
                <M2MaxElements showChipName={false} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}