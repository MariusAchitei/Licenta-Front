// import Page from "@layout/Page";
import Map from "components/custom/Map";
import Statistics from "components/custom/Statistics";
import HelloScreen from "components/custom/HelloScreen";

const Home = () => {
  return (
    <div className=" flex, flex-col space-y-10 p-10">
      {/* // <Page title="Home page"> */}
      {/* <div key="hello-widget"> */}
      <HelloScreen />
      {/* </div> */}
      <div className="mt-10 flex flex-col flex-wrap space-y-10 px-10 lg:flex-row lg:space-x-10  lg:space-y-0">
        <Statistics
          data={{
            type: "clinic",
            value: "256",
            text: "Clinics registered in our platform",
          }}
        />
        <Statistics
          data={{
            type: "appointment",
            value: "205123",
            text: "Medical appointments done using our platform",
          }}
        />
        <Statistics
          data={{
            type: "medic",
            value: "1500",
            text: "Medics at you disposal",
          }}
        />
      </div>
      <div key="Map">
        <Map />
      </div>
      {/* // </Page> */}
    </div>
  );
};

export default Home;
