import { FC } from "react";
import { M1MaxElements } from "./AppleM1Max";

export const AppleM1Ultra:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <span className="apple-logo"></span>
          <span className="chip-name">M1 ULTRA</span>
        </div>
      </div>
    )
  }

  return (
    <div className="chip-bg dark-bg">
      <div className="main-container frame-m1ultra">
        <div className="ultra-chip-frame">
          <div className="chip-main">

            <div className="frame-item-m1-max">
              <div className="chip-frame">
                <M1MaxElements showChipName={false} />
              </div>
            </div>

          </div>
          <div className="chip-name">
            <ChipName />
          </div>
          <div className="chip-main-reverse">
            
            <div className="frame-item-m1-max">
              <div className="chip-frame">
                <M1MaxElements showChipName={false} />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}