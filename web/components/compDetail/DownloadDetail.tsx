"use client"
import { Tab, Tabs } from "@nextui-org/tabs";
import { DetailData, DetailOverView, Result } from "@/components/compDetail/DetailOverview";
import { UploadModel } from "./UploadModel";
import { ResultTab } from "./ResultTab";

export function DownloadDetail({overview,train}:{overview:string,train:string}) {
  return (
    <div>
      <Tabs aria-label="Options">
        <Tab key="overview" title="Overview">
          <DetailOverView overview={overview} />
        </Tab>
        <Tab key="data" title="Data">
          <DetailData train={train} />
        </Tab>
        <Tab key="model" title="Submit">
          <UploadModel />
        </Tab>
        <Tab key="result" title="Result">
          <ResultTab />
        </Tab>
      </Tabs>
    </div>
  )
}