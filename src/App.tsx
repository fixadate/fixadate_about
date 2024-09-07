import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <body className="">
        {/* Header */}
        <header className="">
          <nav className="flex border  border-b-fixadate-gray-2 fixed w-full bg-fixadate-white justify-between items-center py-3 px-8">
            <div className="flex gap-3 items-center">
              <span className="w-14 h-14 p-0.5 border border-fixadate-gray-2 rounded-xl">
                <img src="public/images/app_icon.png" alt="icon" className="w-full h-full object-contain" />
              </span>

              <span className="font-bold text-2xl">Fixadate</span>
            </div>

            <div className="flex gap-6 text-fixadate-gray-5 font-medium">
              <span>홈</span>
              <span>Tech</span>
            </div>
          </nav>
        </header>

        <main className="">
          <div className="flex flex-col gap-72 justify-center">
            {/* App 소개 사진 */}
            <section className="bg-fixadate-primary h-screen flex gap-0 justify-center py-12">
              <img src="public/images/app01.png" alt="app info" className="object-contain max-w-sm" />
              <img src="public/images/app02.png" alt="app info" className="object-contain max-w-sm" />
            </section>

            {/*  Title  */}
            <section className="text-center space-y-7">
              <div className="w-full">
                <img
                  src="public/images/app_icon.png"
                  alt="icon"
                  className="mx-auto w-44 h-44 object-contain"
                />
              </div>

              <h1 className="font-bold text-5xl">Fixadate</h1>

              <div className="space-y-1">
                <p className="font-normal text-xl">나를 다시 돌아보고,</p>
                <p className="font-normal text-xl">나의 하루를 다시 돌아볼 수 있도록 오늘을 되돌아 보고,</p>
                <p className="font-normal text-xl">
                  내일을 다시 설계할 수 있는 <span className="font-medium">Fixadate.</span>
                </p>
              </div>
            </section>

            <section className="max-w-screen-xl space-y-40 mx-auto w-full">
              {/* Section 1  */}
              <div className="flex justify-between items-center">
                <img
                  src="public/images/screenshot01.png"
                  alt="app info"
                  className="object-contain max-w-sm"
                />

                <div className="space-y-4 text-end">
                  <h2 className="text-4xl font-semibold">Lorem ipsum dolor sit</h2>
                  <p className="text-3xl">
                    Et veritatis ea debitis ipsam quasi numquam quaerat modi consectetur, illo earum! Sapiente
                    provident enim aliquam est consequatur fugit porro quia earum!
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="flex justify-between items-center">
                <div className="space-y-4 text-start">
                  <h2 className="text-4xl font-semibold">Lorem ipsum dolor sit</h2>
                  <p className="text-3xl">
                    Et veritatis ea debitis ipsam quasi numquam quaerat modi consectetur, illo earum! Sapiente
                    provident enim aliquam est consequatur fugit porro quia earum!
                  </p>
                </div>

                <img
                  src="public/images/screenshot02.png"
                  alt="app info"
                  className="object-contain max-w-sm"
                />
              </div>

              {/* Section 3 */}
              <div className="flex justify-between items-center">
                <img
                  src="public/images/screenshot03.png"
                  alt="app info"
                  className="object-contain max-w-sm"
                />

                <div className="space-y-4 text-end">
                  <h2 className="text-4xl font-semibold">Lorem ipsum dolor sit</h2>
                  <p className="text-3xl">
                    Et veritatis ea debitis ipsam quasi numquam quaerat modi consectetur, illo earum! Sapiente
                    provident enim aliquam est consequatur fugit porro quia earum!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="mt-48 w-full flex text-fixadate-gray-6 p-12 justify-between">
          <span> Copyright Fixadate. All rights reserved </span>

          <div className="flex gap-4">
            <span> Github </span>

            <span> 뭐시기 </span>
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;
