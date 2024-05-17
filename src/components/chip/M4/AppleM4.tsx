import { FC } from "react";

export const AppleM4:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <span className="apple-logo"></span>
          <span className="chip-name">M4</span>
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
      const coreGridCount = 16;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-cpu-performance-m4">
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
      const coreGridCount = 25;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-cpu-efficiency-m4">
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
    const coreCount = 16;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 12;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-neural-m4-1">
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
    const coreCount = 10;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 72;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-gpu-m4">
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
    const coreCount = 4;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 6;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 9;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-gpu-m4-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`gpuCore${index}`}>
              {item === 1 || item === 2 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`gpu2CoreSide${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
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
      const coreGridCount = 12;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-neural-m2-2">
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
    const coreCount = 6;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 7;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 3;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-bottom-m4-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`rightBotCore${index}`}>
              {item === 1 || item === 2 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item, index) => (
                    <div className={`core-side-${item}`} key={`rightBotMidCore${index}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
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
      const coreGridCount = 3;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCountSide = 22;
      let coreMidGridCountSideArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountSide; index++) {
        coreMidGridCountSideArray.push(index);
      }
      const coreMidGridCountMid = 21;
      let coreMidGridCountMidArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountMid; index++) {
        coreMidGridCountMidArray.push(index);
      }
      return (
        <div className="core-media-m4-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media3Core${index}`}>
              {item === 2 || item === 3 ? (
                <div className="core-side">
                  {coreMidGridCountSideArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`media3CoreSide${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountMidArray.map((item1, index1) => (
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

  const Media2:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 23;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCountSide = 8;
      let coreMidGridCountSideArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountSide; index++) {
        coreMidGridCountSideArray.push(index);
      }
      return (
        <div className="core-media-m4-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media2Core${index}`}>
              {item === 1 || item === 2 ? (
                <div className={`core-side side-${item}`}>
                  {coreMidGridCountSideArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`media2CoreSide${index1}`}></div>
                  ))}
                </div>
              ) : ""}
            </div>
          ))}
        </div>
      )
    }
    return (
      <div className="media-2">
        <Core />
      </div>
    )
  }

  const Media3:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 11;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCountSide = 27;
      let coreMidGridCountSideArray:number[] = [];
      for (let index = 1; index <= coreMidGridCountSide; index++) {
        coreMidGridCountSideArray.push(index);
      }
      return (
        <div className="core-media-m4-3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media3Core${index}`}>
              {item === 1 || item === 2 ? (
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
      <div className="media-3">
        <Core />
      </div>
    )
  }

  const SecureEnclave1:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 25;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 5;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      const coreSideGridCount = 13;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m4-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 || item === 2 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`secureSideCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 3 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`secureMidCore${index1}`}></div>
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
      const coreGridCount = 43;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m4-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}></div>
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

  const SecureEnclave3:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 25;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 8;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      const coreMidGridCount = 18;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m4-3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`secureMidCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 || item === 3 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`secureSideCore${index1}`}></div>
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

  const SecureEnclave4:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 19;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 7;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      const coreMidGridCount = 7;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m4-4">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`secureMidCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 || item === 3 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`secureSideCore${index1}`}></div>
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

  const MediaContainer:FC = () => {
    return (
      <div className="media-container">
        <div className="container-1">
          <Media1 />
        </div>
        <div className="container-2">
          <Media2 />
        </div>
        <div className="container-3">
          <Media3 />
        </div>
      </div>
    )
  }

  const SecureEnclaveContainer:FC = () => {
    return (
      <div className="secure-enclave-container">
        <div className="container-1">
          <SecureEnclave1 />
        </div>
        <div className="container-2">
          <SecureEnclave2 />
        </div>
      </div>
    )
  }

  return (
    <div className="chip-bg dark-bg">
      <div className="main-container frame-m4">
        <div className="chip-frame">
          <div className="chip-item-1">
            <ChipName />
          </div>
          <div className="chip-item-2">
            <CpuPerformance />
          </div>
          <div className="chip-item-3">
            <Gpu />
          </div>
          <div className="chip-item-4">
            <MediaContainer />
          </div>
          <div className="chip-item-5">
            <CpuEfficiency />
          </div>
          <div className="chip-item-6">
            <NeuralEngine1 />
          </div>
          <div className="chip-item-7">
            <Gpu2 />
          </div>
          <div className="chip-item-8">
            <SecureEnclaveContainer />
          </div>
          <div className="chip-item-9">
            <SecureEnclave3 />
          </div>
          <div className="chip-item-10">
            <SecureEnclave4 />
          </div>
          <div className="chip-item-11">
            <RightBottom />
          </div>
        </div>
      </div>
    </div>
  )
}