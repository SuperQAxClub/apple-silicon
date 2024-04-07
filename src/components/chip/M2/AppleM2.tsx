import { FC, Fragment } from "react";

export const AppleM2:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <span className="apple-logo"></span>
          <span className="chip-name">M2</span>
        </div>
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
                  {coreMidGridCountArray.map((item1) => (
                    <div className={`core-mid-${item1}`}></div>
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

  const RightBottom:FC = () => {
    const coreCount = 4;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 13;
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
      <div className="right-bottom">
        {coreCountArray.map(() => (
          <Core />
        ))}
      </div>
    )
  }

  const Media1:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 27;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 8;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}>
              {item === 6 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1) => (
                    <div className={`core-mid-${item1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="right-media-1">
        <Core />
      </div>
    )
  }

  const Media2:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 3;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCountSide = 11;
      let coreMidGridCountSideArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountSide; index++) {
        coreMidGridCountSideArray.push(index);
      }
      const coreMidGridCountMid = 10;
      let coreMidGridCountMidArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountMid; index++) {
        coreMidGridCountMidArray.push(index);
      }
      return (
        <div className="core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}>
              {item === 1 || item === 3 ? (
                <div className="core-side">
                  {coreMidGridCountSideArray.map((item1) => (
                    <div className={`core-side-${item1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 ? (
                <div className="core-mid">
                  {coreMidGridCountMidArray.map((item1) => (
                    <div className={`core-mid-${item1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="right-media-2">
        <Core />
      </div>
    )
  }

  const Media3:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 5;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCountSide = 26;
      let coreMidGridCountSideArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountSide; index++) {
        coreMidGridCountSideArray.push(index);
      }
      const coreMidGridCountMid = 25;
      let coreMidGridCountMidArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountMid; index++) {
        coreMidGridCountMidArray.push(index);
      }
      return (
        <div className="core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}>
              {item === 2 || item === 3 ? (
                <div className="core-side">
                  {coreMidGridCountSideArray.map((item1) => (
                    <div className={`core-side-${item1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 5 ? (
                <div className="core-mid">
                  {coreMidGridCountMidArray.map((item1) => (
                    <div className={`core-mid-${item1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="right-media-3">
        <Core />
      </div>
    )
  }

  const SecureEnclave:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 23;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 9;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core">
          {coreGridCountArray.map((item) => (
            <div className={`core-${item}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1) => (
                    <div className={`core-mid-${item1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="right-secure-enclave">
        <Core />
      </div>
    )
  }

  return (
    <div className="chip-bg">
      <div className="main-container m2">
        <div className="chip-frame">
          <div className="chip-item-1">
            <ChipName />
          </div>
          <div className="chip-item-2">
            <CpuPerformance />
          </div>
          <div className="chip-item-3">
            <CpuEfficiency />
          </div>
          <div className="chip-item-4">
            <NeuralEngine1 />
          </div>
          <div className="chip-item-5">
            <LeftBottom />
          </div>
          <div className="chip-item-6">
            <Gpu />
          </div>
          <div className="chip-item-7">
            <div className="item-a-1">
              <Media1 />
            </div>
            <div className="item-a-2">
              <Media2 />
            </div>
            <div className="item-a-3">
              <Media3 />
            </div>
            <div className="item-a-4">
              <SecureEnclave />
            </div>
          </div>
          <div className="chip-item-8">
            <div className="item-a-left">
              <RightNeural />
            </div>
            <div className="item-a-right">
              <RightBottom />
            </div>
          </div>

          {/* <div className="main-chip-item-left">
            <div className="main-left-container">
              <div className="left-name">
                <ChipName />
              </div>
              <div className="left-item-1">
                <CpuPerformance />
              </div>
              <div className="left-item-2">
                <CpuEfficiency />
              </div>
              <div className="left-item-3">
                <NeuralEngine1 />
              </div>
              <div className="left-item-4">
                <LeftBottom />
              </div>
            </div>
          </div>
          <div className="main-chip-item-right">
            <div className="main-right-container">
              <div className="right-item-1">
                <Gpu />
              </div>
              <div className="right-item-2">
                <div className="item-2-1">
                  <Media1 />
                </div>
                <div className="item-2-2">
                  <Media2 />
                </div>
                <div className="item-2-3">
                  <Media3 />
                </div>
                <div className="item-2-4">
                  <SecureEnclave />
                </div>
              </div>
              <div className="right-item-3">
                <div className="item-3-left">
                  <RightNeural />
                </div>
                <div className="item-3-right">
                  <RightBottom />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}