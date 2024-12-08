import React, { createContext, useContext, useState } from 'react'

const TabsContext=createContext();

function Tabs({children}){
    const [activeTab,setActiveTab]=useState(0);

    const changeTab=(index)=>{
        setActiveTab(index);
    }
 
    return (<TabsContext.Provider value={{activeTab,changeTab}}>{children}</TabsContext.Provider>);
}

const TabList=({children})=>{
   return <div>{children}</div>
}

const Tab=({index,children})=>{
    const {activeTab,changeTab}=useContext(TabsContext);
    return (
        <button style={{fontWeight:activeTab==index?'bold':'normal', width:"60px", marginRight:"4px"}} onClick={()=>changeTab(index)} >{children}</button>
    )
}

const TabPanel=({children})=>{
    const {activeTab}=useContext(TabsContext);
    return <div>{children[activeTab]}</div>
}

const Compound = () => {
  return (
    <div>
      <Tabs>
         <TabList>
            <Tab index={0}>Tab 1</Tab>
            <Tab index={1}>Tab 2</Tab>
            <Tab index={2}>Tab 3</Tab>
         </TabList>
         <TabPanel>
            <div>This is Tab 1</div>
            <div>This is Tab 2</div>
            <div>This is Tab 3</div>
         </TabPanel>
      </Tabs>
    </div>
  )
}

export default Compound
