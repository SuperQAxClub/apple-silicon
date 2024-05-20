import { FC } from "react";

export const AppleA13:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <div className="apple-logo"></div>
        </div>
        <div className="text">
          <div className="chip-name">A13</div>
        </div>
      </div>
    )
  }

  const CpuPerformance:FC = () => {
    const coreCount = 2;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 11;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-cpu-performance-m1">
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
    const coreCount = 4;
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
        <div className="core-cpu-efficiency-m1">
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
    const coreCount = 8;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 11;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 24;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      return (
        <div className="core-neural-m1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`neural1Core${index}`}>
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
      <div className="neural-1">
        {coreCountArray.map((_item, index) => (
          <CpuCore key={`neural1${index}`} />
        ))}
      </div>
    )
  }

  const Gpu:FC = () => {
    const coreCount = 4;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 22;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-gpu-a15">
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

  const SecureEnclave1:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 21;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 39;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      const coreSideGridCount = 20;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 || item === 3 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`secureCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 ? (
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
      const coreGridCount = 5;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 17;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      const coreSideTopGridCount = 25;
      let coreSideTopGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideTopGridCount; index++) {
        coreSideTopGridCountArray.push(index);
      }
      const coreSideRightGridCount = 33;
      let coreSideRightGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideRightGridCount; index++) {
        coreSideRightGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 ? (
                <div className="core-side-top">
                  {coreSideTopGridCountArray.map((item1, index1) => (
                    <div className={`core-side-top-${item1}`} key={`secureCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 ? (
                <div className="core-mid">
                  {coreMidGridCountArray.map((item1, index1) => (
                    <div className={`core-mid-${item1}`} key={`secureCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 3 ? (
                <div className="core-side-right">
                  {coreSideRightGridCountArray.map((item1, index1) => (
                    <div className={`core-side-right-${item1}`} key={`secureCore${index1}`}></div>
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

  const SecureEnclave3:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 11;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreMidGridCount = 19;
      let coreMidGridCountArray:number[] = [];
      for (let index = 1; index <= coreMidGridCount; index++) {
        coreMidGridCountArray.push(index);
      }
      const coreSideGridCount = 20;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 || item === 3 ? (
                <div className="core-side">
                  {coreSideGridCountArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`secureCore${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 ? (
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

  const SecureEnclave4:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 13;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 11;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-4">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 || item === 2 ? (
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

  const SecureEnclave5:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 7;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      const coreSideGridCount = 7;
      let coreSideGridCountArray:number[] = [];
      for (let index = 1; index <= coreSideGridCount; index++) {
        coreSideGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-5">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`secureCore${index}`}>
              {item === 1 ? (
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

  const SecureEnclave6:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 9;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-6">
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

  const SecureEnclave7:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 12;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-secure-enclave-m1-7">
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

  const SecureEnclaveContainer:FC = () => {
    return (
      <div className="secure-enclave-container">
        <div className="container-1">
          <SecureEnclave3 />
        </div>
        <div className="container-2">
          <SecureEnclave4 />
        </div>
        <div className="container-3">
          <SecureEnclave5 />
        </div>
        <div className="container-4">
          <SecureEnclave6 />
        </div>
        <div className="container-5">
          <SecureEnclave7 />
        </div>
      </div>
    )
  }

  return (
    <div className="chip-bg dark-bg">
      <div className="main-container frame-a13">
        <div className="chip-frame">
          <div className="chip-item-1">
            <div className="top-left-grid">
              <div className="item-1">
                <ChipName />
              </div>
              <div className="item-2">
                <CpuPerformance />
              </div>
              <div className="item-3">
                <CpuEfficiency />
              </div>
            </div>
          </div>
          <div className="chip-item-2">
            <Gpu />
          </div>
          <div className="chip-item-3">
            <NeuralEngine1 />
          </div>
          <div className="chip-item-4">
            <SecureEnclaveContainer />
          </div>
          <div className="chip-item-5">
            <SecureEnclave2 />
          </div>
          <div className="chip-item-6">
            <SecureEnclave1 />
          </div>
        </div>
      </div>
    </div>
  )
}