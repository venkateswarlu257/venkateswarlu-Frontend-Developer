/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
  <>
    <div className="relative  w-[1,440px] h-[700px] gap-[156px]">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/1304101392342992653/TEAM/c4f4/4749/-c85c-4755-a1c0-4646ee276bd5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i1z3asm5klJaqOfw-UxCFvUZLAX35F11cGWF3zdtg-DSW5CX9k2CfqdMlBgIRX4nHWv94jDiZdTQw9otP5kyGdQiPolaPbctoGu~J4tB15IzrRxOhTyz5HtTjC0aXTkLojSqW-TxS0zLDdmtMQ7ie3FNXSw5DA4QttPHgFbbC5P~c7wgCRe7wrjiWob9uUHhNtpc4fqARZc2O59Y49dbvTOSbqcCsO5hO7vJ2fhlX2accEpzK8BQvgsynWZA0wKb~jeJbY3Wm61V6EmDaamWy4j8JwsGiYG1OCCuMQzHgDedk0ponjVdyiaH0F0cR~DZk3puPM3LPbUOQqDu39a4PQ__"
        autoPlay
        loop
        muted
        playsInline
      />
      <nav className="relative invisible md:visible flex justify-around items-center sticky top-0">
        <div className="flex justify-between">
          <img src="/Group 20.png" alt="group"/>
          <h1 className="md:text-white">EthAi</h1>
        </div>
        <ul className="flex md:w-[653px] md:h-[64px] md:gap-[0px] md:rounded-full md:border md:border-[#B0FAFFB2] justify-evenly items-center text-[#B0FAFFB2] bg-[#0C2B2FB2;]">
          <li>Features</li>
          <li>Why Us</li>
          <li>Tokenomics</li>
          <li>Roadmap</li>
        </ul>
        <div className="flex justify-between items-center w-[Hug (210.71px)px] h-[Hug (48px)px] gap-[24px]">
          <p className="text-[#FFFFFF]">Log in</p>
          <Link className="w-[110.71px] h-[35px] p-[12px 24px 12px 24px] flex items-center justify-center text-center text-[#0B2A2D] bg-[#CDFCFF] gap-0px rounded-[10px] shadow-xl shadow-inner-[#4CDDFD] opacity: 0px " href={"link"}>Whitepaper</Link>
        </div>
      </nav>
      <nav className="relative visible md:invisible flex justify-between border rounded-full p-[10px] m-[5px] sticky top-0">
        <img src="/Group 20.png" alt="logo" />
        <img src="/Container (4).png" alt="menue" />
      </nav>
      <div className="m-[50px] p-[20px] flex flex-col h-full gap-[0px]">
        <p className="relative text-[#ffffff] font-[Space Grotesk]  text-center  text-[72px] leading-[3rem] font-weight: 500;" >When Innovation</p>
        <p className="relative text-[#ffffff] font-[Space Grotesk]  text-center p-[52px] text-[72px] leading-[3rem] gap-[16px] ">Meets <span className="bg-[#B0F9FF] text-[72px] text-[#0B2A2D] text-center w-[419px] h-[84px] p-[4px 20px 4px 20px] gap-[0px] rounded-[56px] ">Investment</span></p>
        <p className="relative text-[#B0FAFFB2] text-center ">Empowering Trading Through Advanced Technology </p>
        <button className="relative w-[131px] text-[#ffffff] shadow-inner-[#4CDDFD] border-[#8BF9E803] bg-[#0B2A2D] bg-opacity-50 h-[44px] text-center justify-center items-center p-[12px 24px 12px 24px] gap-[0px] rounded-[12px]">Open dApp</button>
      </div>
    </div>
    <div className="bg-[#00161D]  ">
      <div className="md:m-[30px] md:w-[1,440px] md:h-[832px] md:pt-[32px] md:pr-[70px] md:pb-[40px] md:pl-[70px] gap-[16px] w-[350px] h-[1,052px] ">
        <div className="md:flex  md:items-center  md:w-[1,200px] md:h-[504px] gap-[16px] ">
          <div className="bg-[#0C2B2FB2] md:w-[280px] md:h-[504px] md:pt-[72px] md:pr-[37px] md:pb-[32px] md:pl-[37px] md:rounded-tl-[52px] md:rounded-tr-[16px] md:rounded-bl-[16px] md:rounded-br-[16px] p-[10px] border-1 text-center items-center justify-center flex flex-col w-[350px] h-[348px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] rounded-[16px] ">
            <div className="bg-[#15B6C9] w-[100px] h-[100px] top-[91px] left-[89.5px] gap-[0px] rounded-[16px] border-[6px] opacity-[0px] flex justify-center items-center ">
              <div className="w-[53px] h-[44px] top-[119px] left-[114px] gap-[3px] border  ">
              
              </div>
            </div>
            <div>
              <h1 className="text-[#ffffff] text-[22px] ">Trade Optimizer </h1>
              <p className="text-[#B0FAFFB2] text-[10px] ">Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity. </p>
            </div>
          </div>
          <div>
            <div className="bg-[#0C2B2FB2] p-[32px] md:w-[608px] h-[198px] md:rounded-tl-[16px] md:rounded-tr-[16px] md:rounded-bl-[16px] md:rounded-br-[16px] w-[350px] h-[198px] ">
              <h1 className="text-[#ffffff] "> Market Insight </h1>
              <p className="text-[#B0FAFFB2] ">Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
            </div>
            <div className="md:bg-[#0C2B2FB2] invisible md:visible md:w-[608px] md:h-[270px] mt-[20px] rounded-tl-[16px] rounded-tr-[16px] rounded-bl-[16px] rounded-br-[16px] md:shadow-inner width: 608px; "></div>
          </div>
          <div className="bg-[#0C2B2FB2] text-center md:w-[280px] md:h-[504px] md:rounded-tl-[16px] md:rounded-tr-[52px] md:rounded-bl-[16px] md:rounded-br-[16px] md:pt-[32px] md:pr-[22px] md:pb-[32px] md:pl-[22px] gap-[41px]  pt-[24px] rounded-[16px] ">
            <img className="" src="Overlay.png" alt="img"/>
            <h1 className="text-[#ffffff] md:text-[22px] ">Risk Guard </h1>
            <p className="text-[#B0FAFFB2] md:text-[10px] ">Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
          </div>
        </div>
        <div className="md:flex md:w-[1000px] gap-[16px]">
          <div className="bg-[#0C2B2FB2] md:p-[20px] md:w-[270px] md:h-[240px] md:rounded-tl-[16px] md:rounded-tr-[16px] md:rounded-bl-[52px] md:rounded-br-[16px] border">
            <h1 className="text-[#ffffff] ">Portfolio Sync </h1>
            <p className="text-[#B0FAFFB2] ">Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
          </div>
          <div className="bg-[#0C2B2FB2] md:w-[630px] md:h-[240px] md:p-[32px] md:rounded-tl-[16px] md:rounded-tr-[16px] md:rounded-bl-[16px] md:rounded-br-[52px] border ">
            <h1 className="text-[#ffffff] ">Opportunity Scout </h1>
            <p className="text-[#B0FAFFB2] ">Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col justify-center items-center md:w-[1,440px] md:h-[756px] md:pt-[72px]">
        <h1 className="text-[#ffffff] text-[40px] ">About EthAi</h1>
        <p className="text-[#B0FAFFB2] text-[16px] ">At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools that help traders keep up with all new market trends, track top traders’ movements.</p>
        <button className="bg-[#CDFCFF] rounded-[12px] md:w-[108.91px] md:h-[40px] t-[172px] l-[665.55px] md:pt-[10px] md:pr-[20px] md:pb-[10px] md:pl-[20px]">Read more</button>
        <div className="bg-[#08252A] md:w-[744px] md:h-[400px] flex flex-col md:justify-center text-start md:items-center left-[348px] pt-[48px] pr-[64px] pb-[48px] pl-[63px] rounded-[20px]">
          <div className="md:w-[617px] md:h-[304px] top-[48px] left-[63px] gap-[40px] md:flex pt-[60px] ">
            <div className="w-[290.5px] h-[120px] gap-[12px]">
              <img src="graph.png" alt="graph"/>
              <h1 className="text-[#ffffff]">Stay Ahead</h1>
              <p className="text-[#B0FAFFB2]">No more guesswork—get clear, trustable insights.</p>
            </div>
            <div className="w-[290.5px] h-[120px] gap-[12px]">
              <img src="Vector (1).png" alt="vector"/>
              <h1 className="text-[#ffffff]">Know Your Assets</h1>
              <p className="text-[#B0FAFFB2]">Always stay on top of how your investments are performing.</p>
            </div>
          </div>
          <div className="md:w-[617px] md:h-[304px] top-[48px] left-[63px] gap-[40px] md:flex ">
            <div className="w-[290.5px] h-[120px] gap-[12px]">
              <img src="Vector (2).png" alt="vector"/>
              <h1 className="text-[#ffffff]">Simple, Not Overwhelming</h1>
              <p className="text-[#B0FAFFB2]">Our tools are designed to make complex market analysis easy to understand and act on.</p>
            </div>
            <div className="w-[290.5px] h-[120px] gap-[12px]">
              <img src="Future Technology.png" alt="vector"/>
              <h1 className="text-[#ffffff]">Future-Proof</h1>
              <p className="text-[#B0FAFFB2]">We’re constantly improving, adding new features to help you make the most informed decisions possible..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[1,440px] md:h-[694px] md:pt-[24px] md:pr-[0px] md:pb-[24px] md:pl-[0px] gap-[80px]">
        <video
          className="absolute bg-none h-full w-full object-cover"
          src="/-b73b-41ed-85be-06b5992f5f11.mov"
          autoPlay
          loop
          muted
          playsInline
        />
        <h1 className="relative text-[#ffffff] text-center text-[22px]">Tokenomics</h1>
        <div className="md:flex ">
          <img className="relative" src="/Donut.png" alt="image"/>
          <div>
            <img className="relative" src="/Frame 43085.png" alt="image"/>
            <img className="relative" src="/Frame 43086.png" alt="image"/>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-[#ffffff]">Roadmap</h1>
        <div className="md:flex justify-between items-center">
          <div>
            <p className="md:w-[73px] md:h-[28px] md:md:pt-[6px] md:pr-[12px] md:pb-[6px] md:pl-[12px] rounded-[4px] bg-[#F7F7F7] text-[#333333] text-12 ">Phase 1</p>
            <h1 className="text-[#FFFFFF] ">Kicking Off</h1>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Launch of EthAi: Officially</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Development of Core AI Agents</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>User Onboarding Campaign</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Community Engagement Initiatives</p>
          </div>
          <div>
            <img className="h-[70vh] w-[50vw]" src="/Container (1).png" alt="s"/>
          </div>
        </div>
      </div>
      <div className="md:flex  items-center">
        <div>
          <img className="h-[70vh] w-[50vw]" src="/Container (2).png" alt="container" />
        </div>
        <div>
            <p className="w-[73px] h-[28px] p-[6px 12px 6px 12px] rounded-[4px] bg-[#F7F7F7] text-[#333333] text-12 ">Phase 2</p>
            <h1 className="text-[#FFFFFF] ">Kicking Off</h1>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Launch of EthAi: Officially</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Development of Core AI Agents</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>User Onboarding Campaign</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Community Engagement Initiatives</p>
          </div>
      </div>
      <div className="md:flex justify-between items-center">
        <div>
            <p className="w-[73px] h-[28px] p-[6px 12px 6px 12px] rounded-[4px] bg-[#F7F7F7] text-[#333333] text-12 ">Phase 3</p>
            <h1 className="text-[#FFFFFF] ">Full Power</h1>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Introduction of Enhanced Features</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>API Integration for Data Access</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Launch of Community-Driven Initiatives</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Image.png" alt="img"/>Continuous Improvement and Updates</p>
          </div>
          <div>
            <img className="h-[70vh] w-[50vw]" src="image (1).png" alt="image" />
          </div>
      </div>
      <div className="md:flex justify-center w-[1,200px] h-[551px] pt-[100px] pr-[108px] pb-[120px] pl-[141px] gap-60 bg-[#00161D] ">
        <h1 className="text-[#FFFFFF] text-[40px] ">Frequently Asked Questions</h1>
        <div className="w-675px] h-[331px] rounded-[20px]">
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Container (3).png" alt="img"/>What is EthAi?</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Container (3).png" alt="img"/>How can EthAi can help me as a Trader?</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Container (3).png" alt="img"/>Who can use EthAi?</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Container (3).png" alt="img"/>How does EthAi track smart money flow?</p>
            <p className="text-[#EFEFE8] flex  items-center gap-[10px] "><img src="/Container (3).png" alt="img"/>How does ensure data security?</p>
        </div>
      </div>
      <div className="md:w-[1,440px] md:h-[462px] md:pr-[140px] md:pb-[48px] md:pl-[140px] flex justify-around">
        <div className="text-center md:w-[960px] md:h-[382px] md:pt-[56px] md:pr-[156px] md:pb-[56px] md:pl-[156px] gap-[30px] rounded-[20px] border border-[#63F2FF1A] shadow shadow-inner-[#63F2FF1A]">
          <h1 className="text-[#FFFFFF] text-[30px]">Explore Our <span className="text-[#62F0FE]">dApp</span></h1>
          <p className="text-[#B0FAFFB2] ">EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions. By tracking smart money flows, monitoring key wallets, and providing real-time market insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI features for asset recommendations, market analysis, and personalized crypto Q&A, making it the ultimate tool for both novice and experienced traders.</p>
          <button className="bg-[#CDFCFF] shadow-inner w-[139.71px] h-[44px] pl-[12px] pr-[24px] pt-[12px] pb-[24px] rounded-[12px] m-[10px]">Open dApp</button>
        </div>
      </div>
      <div className="w-[1,440px] bg-[#010F14] h-[400px] pt-[0px] pr-[66px] pb-[0px] pl-[66px] flex justify-between items-center">
        <div>
          <div className="flex"><img src="/Group 20.png" alt="logo"/> <h1 className="text-[#ffffff]">EthAi</h1></div>
          <div className="flex justify-between"><img src="Vector (4).png" alt=""/> <img src="/instagram.png" alt="instagram"/> <img src="/Group.png" alt="x"/> <img src="/f.png" alt="facebook"/> <img src="Vector (5).png" alt=""/> </div>
        </div>
        <div>
          <h1>“Designed for traders of today, just like you."</h1>
          <div className="border rounded-md">
            <input className="bg-transparent focus:outline-none" placeholder="What's your work email?"/>
            <button className="bg-[#8BF9E803] border  w-[135px] h-[44px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] rounded-[12px] text-[#ffffff] ">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
