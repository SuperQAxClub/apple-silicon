import { FC } from "react";

export const AppleM3Pro:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <span className="apple-logo"></span>
          <span className="chip-name">M3 PRO</span>
        </div>
      </div>
    )
  }

  const CpuPerformance:FC = () => {
    const coreCount = 6;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 13;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-cpu-performance-m2-pro">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`cpuPerfCore${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="cpu-performance">
        {coreCountArray.map((_item, index) => (
          <CpuCore key={`cpuPerf${index}`} />
        ))}
      </div>
    )
  }

  const CpuEfficiency:FC = () => {
    const coreCount = 6;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 15;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-cpu-efficiency-m2-pro">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`cpuEffCore${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="cpu-efficiency">
        {coreCountArray.map((_item, index) => (
          <CpuCore key={`cpuEff${index}`} />
        ))}
      </div>
    )
  }

  const NeuralEngine1:FC = () => {
    const coreCount = 24;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 20;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-neural-m2-pro-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`neural1Core${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="neural-1">
        {coreCountArray.map((_item, index) => (
          <CpuCore key={`neural1${index}`} />
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
        <div className="core-bottom-m2-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`leftBotCore${index}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`leftBotCoreMid${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="bottom-1">
        {coreCountArray.map((_item, index) => (
          <CpuCore key={`leftBot${index}`} />
        ))}
      </div>
    )
  }

  const Gpu:FC = () => {
    const coreCount = 18;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 50;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-gpu-m3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`gpuCore${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="gpu">
        {coreCountArray.map((_item, index) => (
          <Core key={`gpu${index}`} />
        ))}
      </div>
    )
  }

  const Gpu2:FC = () => {
    const coreCount = 6;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 17;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-gpu-m3-pro-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`gpuCore${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="gpu-2">
        {coreCountArray.map((_item, index) => (
          <Core key={`gpu${index}`} />
        ))}
      </div>
    )
  }

  const NeuralEngine2:FC = () => {
    const coreCount = 16;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 10;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-neural-m3-pro-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`rightNeuralCore${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="neural-2">
        {coreCountArray.map((_item, index) => (
          <Core key={`rightNeural${index}`} />
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
        <div className="core-bottom-m2-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`rightBotCore${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="bottom-2">
        {coreCountArray.map((_item, index) => (
          <Core key={`rightBot${index}`} />
        ))}
      </div>
    )
  }

  const Media1:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 24;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-media-m3-pro-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media3Core${index}`}>
              {item === 1 ? (
                <div className="core-mid"></div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="media">
        <Core />
      </div>
    )
  }

  const Media2:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 27;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 10;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core-media-m3-pro-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media2Core${index}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`media2CoreMid${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="media">
        <Core />
      </div>
    )
  }

  const Media3:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 28;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCountSide = 3;
      let coreMidGridCountSideArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountSide; index++) {
        coreMidGridCountSideArray.push(index);
      }
      return (
        <div className="core-media-m3-pro-3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media3Core${index}`}>
              {[1, 2, 3, 4].includes(item) ? (
                <div className="core-side">
                  {coreMidGridCountSideArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`media3CoreSide${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="media">
        <Core />
      </div>
    )
  }

  const Media4:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 13;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 20;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core-media-m3-pro-4">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media3Core${index}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`media3CoreMid${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="media">
        <Core />
      </div>
    )
  }

  const SecureEnclave:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 19;
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
        <div className="core-secure-enclave-m3-pro">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`secureCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="secure-enclave">
        <Core />
      </div>
    )
  }

  const SecureEnclave2:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 9;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 6;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m3-pro-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 || item === 6 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`secureCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="secure-enclave">
        <Core />
      </div>
    )
  }

  return (
    <div className="chip-bg dark-bg">
      <div className="main-container frame-m3-pro">
        <div className="chip-frame">
          <div className="chip-item-1">
            <ChipName />
          </div>
          <div className="chip-item-2">
            <Gpu2 />
          </div>
          <div className="chip-item-3">
            <Gpu />
          </div>
          <div className="chip-item-4">
            <div className="frame-split">
              <div className="split-item">
                <SecureEnclave />
              </div>
              <div className="split-item">
                <SecureEnclave />
              </div>
            </div>
          </div>
          <div className="chip-item-5">
            <NeuralEngine2 />
          </div>
          <div className="chip-item-6">
            <Media2 />
          </div>
          <div className="chip-item-7">
            <SecureEnclave2 />
          </div>
          <div className="chip-item-8">
            <Media1 />
          </div>
          <div className="chip-item-9">
            <Media3 />
          </div>
          <div className="chip-item-10">
            <Media1 />
          </div>
          <div className="chip-item-11">
            <Media3 />
          </div>
          <div className="chip-item-12">
            <Media4 />
          </div>
          <div className="chip-item-13">
            <Media4 />
          </div>
          <div className="chip-item-14">
            <div className="frame-split">
              <div className="split-item">
                <CpuPerformance />
              </div>
              <div className="split-item">
                <CpuEfficiency />
              </div>
            </div>
          </div>
          <div className="chip-item-15">
            <div className="frame-split">
                <div className="split-item">
                  <RightBottom />
                </div>
                <div className="split-item">
                  <RightBottom />
                </div>
              </div>
          </div>
          <div className="chip-item-16">
            <NeuralEngine1 />
          </div>
        </div>
      </div>
    </div>
  )
}