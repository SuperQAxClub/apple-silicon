import { FC } from "react";

export const AppleM2:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="overlay">
        <span className="apple-logo"></span>
        <span className="chip-name">M2</span>
      </div>
    )
  }

  const CpuPerformance:FC = () => {
    const coreCount = 4;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 17;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="cpu-core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="left-cpu-performance">
        {coreCountArray.map(() => (
          <CpuCore />
        ))}
      </div>
    )
  }

  const CpuEfficiency:FC = () => {
    const coreCount = 4;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 25;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="cpu-core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="left-cpu-efficiency">
        {coreCountArray.map(() => (
          <CpuCore />
        ))}
      </div>
    )
  }

  const NeuralEngine1:FC = () => {
    const coreCount = 16;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 18;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="cpu-core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="left-neural">
        {coreCountArray.map(() => (
          <CpuCore />
        ))}
      </div>
    )
  }

  const LeftBottom:FC = () => {
    const coreCount = 2;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 25;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 11;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="cpu-core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item) => (
                    <div className={`core-mid-${item}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="left-bottom">
        {coreCountArray.map(() => (
          <CpuCore />
        ))}
      </div>
    )
  }

  const Gpu:FC = () => {
    const coreCount = 10;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 29;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="right-gpu">
        {coreCountArray.map(() => (
          <Core />
        ))}
      </div>
    )
  }

  const RightNeural:FC = () => {
    const coreCount = 16;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 12;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="right-neural">
        {coreCountArray.map(() => (
          <Core />
        ))}
      </div>
    )
  }

  return (
    <div className="chip-bg">
      <div className="main-container m2">
        <div className="chip-frame">
          <div className="main-chip-item-left">
            <div className="main-left-container">
              <div className="left-name">
                <ChipName />
              </div>
              <div className="left-item-container">
                <div className="item-half">
                  <CpuPerformance />
                </div>
                <div className="item-half flex-container">
                  <div className="item-half-flex-item">
                    <CpuEfficiency />
                  </div>
                  <div className="item-half-flex-item">
                    <NeuralEngine1 />
                  </div>
                  <div className="item-half-fixed-item">
                    <LeftBottom />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-chip-item-right">
            <div className="main-right-container">
              <div className="right-item-1">
                <Gpu />
              </div>
              <div className="right-item-2">
                
              </div>
              <div className="right-item-3">
                <div className="item-3-left">
                  <RightNeural />
                </div>
                <div className="item-3-right">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}