"use client"
import { Image } from "@nextui-org/image";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Card, CardBody } from "@nextui-org/card";


export default function CompCatch() {
  return (
    <main className="w-11/12 mx-auto ps-3">
      <section className="flex flex-row justify-between">
        <div className="basis-1/2 mt-5">
          <h1 className="text-3xl font-bold">LLm Recovery</h1>
        </div>
        <div className="basis-1/4">
          <Image src={"/home/home.png"} />
        </div>
      </section>
      <section>
        <div>
          <Tabs aria-label="Options">
            <Tab key="overview" title="Overview">
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="data" title="Data">
              <Card>
                <CardBody>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </section>
    </main>
  )
}