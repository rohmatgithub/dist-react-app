import * as React from "react";

function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col pt-8">
      <div className="flex items-stretch justify-between gap-5 mr-16 self-end max-md:mr-2.5">
        <div className="text-black text-right text-xl font-medium self-start">
          Works
        </div>
        <div className="text-black text-right text-xl font-medium">Blog</div>
        <div className="text-black text-right text-xl font-medium self-start">
          Contact
        </div>
      </div>
      <div className="self-center flex w-full max-w-[856px] flex-col items-stretch mt-40 max-md:max-w-full max-md:mt-10">
        <div className="max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-800 text-5xl font-bold leading-[60px] max-md:max-w-full">
                  Hi, I am John,
                  <br />
                  Creative Technologist
                </div>
                <div className="text-slate-800 text-base mt-9 max-md:max-w-full">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a9cf0044dee5024cba63db5cd751eef90a2ab48a932e487946e60f9940eb16d6?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-[0.97] object-contain object-center w-full overflow-hidden grow rounded-[50%] max-md:mt-10"
              />
            </div>
          </div>
        </div>
        <div className="text-white text-xl font-medium whitespace-nowrap bg-red-400 justify-center items-stretch mt-3 px-6 py-4 rounded-sm self-start max-md:pr-5">
          Download Resume
        </div>
      </div>
      <div className="bg-slate-100 self-stretch flex w-full flex-col justify-center items-center mt-16 px-16 py-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full max-w-[856px] flex-col items-stretch max-md:max-w-full">
          <div className="flex items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-slate-800 text-2xl leading-[60.06px]">
              Recent posts
            </div>
            <div className="text-cyan-500 text-right text-base self-center my-auto">
              View all
            </div>
          </div>
          <div className="mt-5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="rounded shadow-sm bg-white flex w-full grow flex-col items-stretch mx-auto pl-6 pr-12 py-8 max-md:mt-5 max-md:px-5">
                  <div className="text-slate-800 text-2xl font-bold">
                    Making a design system from scratch
                  </div>
                  <div className="flex items-center justify-between gap-5 mt-10">
                    <div className="text-slate-800 text-lg w-[402px] my-auto">
                      12 Feb 2020
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c48e8ce1f49728ec43a36c254b4e507ad15c42ae8a26611b6a972f4a7dd2623c?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                      className="aspect-[0.05] object-contain object-center w-px stroke-[1px] stroke-black overflow-hidden self-stretch shrink-0 max-w-full"
                    />
                    <div className="text-slate-800 text-lg w-[257px] self-start">
                      Design, Pattern
                    </div>
                  </div>
                  <div className="text-slate-800 text-base mt-7">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="rounded bg-white flex w-full grow flex-col items-stretch mx-auto pl-6 pr-12 py-8 max-md:mt-5 max-md:px-5">
                  <div className="text-slate-800 text-2xl font-bold">
                    Creating pixel perfect icons in Figma
                  </div>
                  <div className="flex items-center justify-between gap-5 mt-8">
                    <div className="text-slate-800 text-lg w-[402px] my-auto">
                      12 Feb 2020
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c48e8ce1f49728ec43a36c254b4e507ad15c42ae8a26611b6a972f4a7dd2623c?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                      className="aspect-[0.05] object-contain object-center w-px stroke-[1px] stroke-black overflow-hidden shrink-0 max-w-full self-start"
                    />
                    <div className="text-slate-800 text-lg w-[257px] mt-1.5 self-start">
                      Figma, Icon Design
                    </div>
                  </div>
                  <div className="text-slate-800 text-base max-w-[344px] mt-7 max-md:mr-1.5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[859px] flex-col items-stretch mt-9 px-5 max-md:max-w-full">
        <div className="text-slate-800 text-2xl leading-[60.06px] max-md:max-w-full">
          Featured works
        </div>
        <div className="mt-11 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a2ea7abadadc8742249cff18da2ead2ac477580179a6038f5653ceec09de22b9?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-[1.37] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
              />
            </div>
            <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-start max-md:max-w-full max-md:mt-5">
                <div className="text-slate-800 text-3xl font-bold self-stretch max-md:max-w-full">
                  Designing Dashboards
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-7">
                  <div className="text-white text-lg font-black leading-[59.94px] whitespace-nowrap bg-blue-950 aspect-[2.44] justify-center items-stretch px-3 py-1.5 rounded-2xl">
                    2020
                  </div>
                  <div className="text-slate-400 text-xl self-start">
                    Dashboard
                  </div>
                </div>
                <div className="text-slate-800 text-base self-stretch mt-7 max-md:max-w-full">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e044c50c7fdc28ee7b826c2f913cda408d3935dd53ef17cb929c6d5a464bf076?apiKey=57feb64800df4e20be2c6f74ae60e771&"
          className="aspect-[859] object-contain object-center w-full stroke-[1px] stroke-neutral-200 overflow-hidden mt-4 max-md:max-w-full"
        />
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[31%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0493c789c20c782fec04f01bffa0a5bc6291db896079a873ddcda374ca2e7b8?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-[1.37] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
              />
            </div>
            <div className="flex flex-col items-stretch w-[69%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-6">
                <div className="text-slate-800 text-3xl font-bold self-stretch max-md:max-w-full">
                  Vibrant Portraits of 2020
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-7">
                  <div className="text-white text-lg font-black leading-[59.94px] whitespace-nowrap bg-blue-950 aspect-[2.44] justify-center items-stretch px-3 py-1.5 rounded-2xl">
                    2018
                  </div>
                  <div className="text-slate-400 text-xl self-start">
                    Illustration
                  </div>
                </div>
                <div className="text-slate-800 text-base self-stretch mt-7 max-md:max-w-full">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e044c50c7fdc28ee7b826c2f913cda408d3935dd53ef17cb929c6d5a464bf076?apiKey=57feb64800df4e20be2c6f74ae60e771&"
          className="aspect-[859] object-contain object-center w-full stroke-[1px] stroke-neutral-200 overflow-hidden mt-9 max-md:max-w-full"
        />
        <div className="mt-8 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e521fe12fe4fb7d4f9baea454f57e6f12a65bedcb3b684e0754909321479018?apiKey=57feb64800df4e20be2c6f74ae60e771&"
                className="aspect-[1.34] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
              />
            </div>
            <div className="flex flex-col items-stretch w-[71%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-2 items-start max-md:max-w-full max-md:mt-7">
                <div className="text-slate-800 text-3xl font-bold self-stretch max-md:max-w-full">
                  36 Days of Malayalam type
                </div>
                <div className="flex items-stretch justify-between gap-5 mt-5">
                  <div className="text-white text-lg font-black leading-[59.94px] whitespace-nowrap bg-blue-950 grow justify-center items-stretch px-3 py-1.5 rounded-2xl">
                    2018
                  </div>
                  <div className="text-slate-400 text-xl self-center w-full my-auto">
                    Typography
                  </div>
                </div>
                <div className="text-slate-800 text-base self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e044c50c7fdc28ee7b826c2f913cda408d3935dd53ef17cb929c6d5a464bf076?apiKey=57feb64800df4e20be2c6f74ae60e771&"
          className="aspect-[859] object-contain object-center w-full stroke-[1px] stroke-neutral-200 overflow-hidden mt-7 max-md:max-w-full"
        />
      </div>
      <div className="bg-white self-stretch flex w-full flex-col justify-center items-center mt-20 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[232px] max-w-full flex-col items-stretch mb-2">
          <div className="flex items-stretch justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/067330deed33eabafef593734c871c83dafce4ba82f75fdaff80de606efc8138?apiKey=57feb64800df4e20be2c6f74ae60e771&"
              className="aspect-square object-contain object-center w-[30px] fill-slate-800 overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5a4bab6ee0b091fffa43f065bea63ed0f8f43a5ae07dd00079de42fe058d4a4?apiKey=57feb64800df4e20be2c6f74ae60e771&"
              className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c65b17ffe1d5d4ff1a341fa08b93867bc6b5f3d81dc031800fa602a3ca99375f?apiKey=57feb64800df4e20be2c6f74ae60e771&"
              className="aspect-[1.23] object-contain object-center w-[37px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d101d20b1c5d5e2ce5dee28df7059a13d11a6bc10ee851284fa393c667620e6c?apiKey=57feb64800df4e20be2c6f74ae60e771&"
              className="aspect-square object-contain object-center w-[30px] fill-slate-800 overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-slate-800 text-center text-sm whitespace-nowrap mt-8">
            Copyright ©2020 All rights reserved{" "}
          </div>
        </div>
      </div>
    </div>
  );
}


export default MyComponent;