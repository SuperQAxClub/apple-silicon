import { FC, Fragment } from "react";

export const AppleM2Max:FC = () => {

  const ChipName:FC = () => {
    return (
      <div className="left-name">
        <div className="text">
          <span className="apple-logo"></span>
          <span className="chip-name">M2 MAX</span>
        </div>
      </div>
    )
  }

  const CpuPerformance:FC = () => {
    const coreCount = 8;
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
    const coreCount = 48;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const CpuCore:FC = () => {
      const coreGridCount = 24;
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
    const coreCount = 1;
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
        <div className="core-bottom-m2-pro-1">
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

  type gpuCoreIndex = {
    coreIndex:number
  }

  const Gpu:FC = () => {
    const coreCount = 36;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 26;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <Fragment>
          <div className={`core-gpu-m2-pro`}>
            {coreGridCountArray.map((item, index) => (
              <div className={`core-${item}`} key={`gpuCore${index}`}></div>
            ))}
          </div>
        </Fragment>
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
  const GpuLandscape:FC = () => {
    const coreCount = 2;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 26;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <Fragment>
          <div className={`core-gpu-landscape-m2-pro`}>
            {coreGridCountArray.map((item, index) => (
              <div className={`core-${item}`} key={`gpuCore${index}`}></div>
            ))}
          </div>
        </Fragment>
      )
    }
    return (
      <div className="gpu-landscape">
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
        <div className="core-neural-m2-pro-2">
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
        <div className="bottom-2-item">
          {coreCountArray.map((_item, index) => (
            <Core key={`rightBot${index}`} />
          ))}
        </div>
        <div className="bottom-2-item">
          {coreCountArray.map((_item, index) => (
            <Core key={`rightBot${index}`} />
          ))}
        </div>
      </div>
    )
  }

  const Bottom3:FC = () => {
    const coreCount = 6;
    let coreCountArray:string[] = [];
    for (let index = 0; index < coreCount; index++) {
      coreCountArray.push("a");
    }
    const Core:FC = () => {
      const coreGridCount = 14;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-bottom-m2-3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`Bot3Core${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="bottom-3">
        {coreCountArray.map((_item, index) => (
          <Core key={`rightBot${index}`} />
        ))}
      </div>
    )
  }

  const Media1:FC = () => {
    const Core:FC = () => {
      const coreGridCount = 34;
      let coreGridCountArray:number[] = [];
      for (let index = 1; index <= coreGridCount; index++) {
        coreGridCountArray.push(index);
      }
      return (
        <div className="core-media-m2-pro-1">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media1Core${index}`}></div>
          ))}
        </div>
      )
    }
    return (
      <div className="media-1">
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
      const coreMidGridCountSide = 10;
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
        <div className="core-media-m2-pro-2">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media2Core${index}`}>
              {item === 1 || item === 3 ? (
                <div className="core-side">
                  {coreMidGridCountSideArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`media2CoreSide${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 2 ? (
                <div className="core-mid">
                  {coreMidGridCountMidArray.map((item1, index1) => (
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
      <div className="media-2">
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
      const coreMidGridCountSide = 28;
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
        <div className="core-media-m2-pro-3">
          {coreGridCountArray.map((item, index) => (
            <div className={`core-${item}`} key={`media3Core${index}`}>
              {item === 2 || item === 3 ? (
                <div className="core-side">
                  {coreMidGridCountSideArray.map((item1, index1) => (
                    <div className={`core-side-${item1}`} key={`media3CoreSide${index1}`}></div>
                  ))}
                </div>
              ) : ""}
              {item === 5 ? (
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
      <div className="media-3">
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
        <div className="core-secure-enclave-m2-max">
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

  return (
    <div className="chip-bg dark-bg">
      <div className="main-container m2max">
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
            <NeuralEngine2 />
          </div>
          <div className="chip-item-5">
            <SecureEnclave />
          </div>
          <div className="chip-item-6">
            <LeftBottom />
          </div>
          <div className="chip-item-7">
            <Bottom3 />
          </div>
          <div className="chip-item-8">
            <Gpu />
          </div>
          <div className="chip-item-9">
            <GpuLandscape />
          </div>
          <div className="chip-item-10">
            <div className="item-10-1">
              <Media1 />
            </div>
            <div className="item-10-2">
              <Media1 />
            </div>
            <div className="item-10-3">
              <Media2 />
            </div>
            <div className="item-10-4">
              <Media3 />
            </div>
            <div className="item-10-5">
              <Media3 />
            </div>
            <div className="item-10-6">
              <RightBottom />
            </div>
          </div>
          <div className="chip-item-11">
            <NeuralEngine1 />
          </div>
          <div className="chip-item-12">
            <RightBottom />
          </div>
        </div>
      </div>
    </div>
  )
}