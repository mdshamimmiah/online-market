
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Digital from '../../component/digital/Digital';
import Graphics from '../../component/graphics/Graphics';
import { useLoaderData } from 'react-router-dom';
import JobCart from './jobCart/JobCart';
import backgroundimage from '../../assets/back.jpg'

const TabBase = () => {

  const jobs = useLoaderData();
  console.log(jobs);
  const filter = jobs?.filter(p => p.category.includes('web-development'));
  const filter2 = jobs?.filter(p => p.category.includes('digital-marketing'));
  const filter3 = jobs?.filter(p => p.category.includes('graphics-design'));
  console.log(filter);



  return (
    <div className='text-center h-[1200px]' style={{backgroundSize:'cover',backgroundRepeat:'no repeat',backgroundImage:`url(${backgroundimage})`}}>
     <h2 className='text-3xl font-bold mb-4'> Our category </h2>
      <Tabs>
        <TabList>
          <Tab>Web Development</Tab>
          <Tab>Digital Marketing</Tab>
          <Tab>Graphics Design</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter2?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter3?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabBase;