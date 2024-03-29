import React, { Component } from "react";
import {
  Stickynav,
  ProductJumbo,
  ProductText,
  ProductCallout,
} from "arccorp-vars";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="advanced-data-analytics-page">
        <Stickynav
          title="Advanced Data Analytics"
          links={[
            { title: "Overview", url: "#overview" },
            { title: "Solutions", url: "#solutions" },
          ]}
          contactUs="Learn More"
          rightLink="https://www2.arccorp.com/support-training/product-sales-request?Product=Advanced_Data_Analytics"
        ></Stickynav>
        <ProductJumbo
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-jumbo.png"
          title={
            <>
              Advanced data analytics <br />
              using Artificial Intelligence
            </>
          }
          width="100%"
          subtitle={
            <> 
              Solve the most complex business challenges using{" "}
              <span>
              ARC’s machine-learning techniques and technology.
              </span>
            </>
          }
          ctaLink="https://www2.arccorp.com/support-training/product-sales-request?Product=Advanced_Data_Analytics"
        ></ProductJumbo>
        <ProductText
          id="overview"
          eyebrow="Overview"
          titleClass=""
          title={
            <>
              A Better Way to Make <br />
              Business Decisions{" "}
            </>
          }
          subtitle="ARC's advanced analytic capabilities combine AI with years of industry experience to enable groundbreaking travel insights. Leveraging Amazon's SageMaker technology, ARC provides next-generation solutions for airline Cabin Class Mapping, Total Air Market estimates, Quality Service Index and Trip Classification."
        />
        <ProductText
          id="solutions"
          className="ada-solutions"
          eyebrow="Solutions"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-solutions-bg.png"
          title={
            <>
              <span class="icon-arc-logo" /> Total Air Market
            </>
          }
          subtitle={
            <>
              Estimated datasets enable customers to understand total global air
              market size, carrier market shares, traffic distribution, demand
              growth and fare patterns. The information provided by ARC’s Total
              Air Market (TAM) data can be used for{" "}
              <span>strategic planning</span> and{" "}
              <span className="white">operational management</span> in specific
              markets.
            </>
          }
          body={
            <>
              <div className="row" style={{ marginBottom: "80px" }}>
                <div className="col-lg-6">
                  <div className="ada-solutions-card card-1">
                    <div>
                      Total market size at the{" "}
                      <span className="white">
                        flight
                        <br /> coupon level
                      </span>{" "}
                      is provided with
                      <br /> <span>actual tickets</span> and estimates
                      <br /> of extra traffic.
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="ada-solutions-card">
                    <div>
                      Datasets with sales, refund and exchange information are{" "}
                      <span>updated weekly</span>. Estimates are generated by
                      including total traffic statistics from nearly{" "}
                      <span className="white">2000 airports</span> and load
                      factors from more than{" "}
                      <span className="white">400 airlines</span>.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg">
                  <div className="ada-solutions-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/speed.png"
                      alt="Speed"
                    />
                    <br />
                    <div className="ada-solutions-icon-title">Speed</div>
                    <div className="ada-solutions-icon-copy">
                      Updates are
                      <br /> refreshed with a<br /> minimal lag time.
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="ada-solutions-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/segmentation.png"
                      alt="Segmentation"
                    />
                    <br />
                    <div className="ada-solutions-icon-title">Segmentation</div>
                    <div className="ada-solutions-icon-copy">
                      Understand traveler
                      <br />
                      profiles and trip
                      <br />
                      characteristics.
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="ada-solutions-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/thorough.png"
                      alt="Thorough"
                    />
                    <br />
                    <div className="ada-solutions-icon-title">Thorough</div>
                    <div className="ada-solutions-icon-copy">
                      Thorough analysis
                      <br />
                      down to airport terminal <br />
                      and flight level.
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="ada-solutions-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/updates.png"
                      alt="Updates"
                    />
                    <br />
                    <div className="ada-solutions-icon-title">Updates</div>
                    <div className="ada-solutions-icon-copy">
                      Regular recalibrations
                      <br />
                      and adjustments
                      <br />
                      of TAM.
                    </div>
                  </div>
                </div>
                <div className="col-lg">
                  <div className="ada-solutions-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/quality.png"
                      alt="Quality"
                      style={{ paddingBottom: "30px" }}
                    />
                    <br />
                    <div className="ada-solutions-icon-title">Quality</div>
                    <div className="ada-solutions-icon-copy">
                      Extensive quality
                      <br />
                      control and validation
                      <br />
                      checks.
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div class="text-center" style={{paddingTop: "80px"}}>
                    <div className="product-callout-copy" style={{margin: "0 auto"}}>Learn more about ARC Total Air Market</div>
                    <a href="https://www2.arccorp.com/globalassets/datasheets/arc-tam-datasheet.pdf" className="ctaBtn ctaBtn-green">
                      Download Product Sheet
                    </a>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <ProductText
          className="ada-index"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-index-bg.png"
          title={
            <>
              <span class="icon-arc-logo" /> Quality of Service Index
            </>
          }
          subtitle={
            <div className="ada-index-copy">
              ARC Quality of Service Index (QSI){" "}
              <span>predicts customer behavior</span> by quantifying the
              relative attractiveness of flight options by market{" "}
              <span className="white">(O&D City pair)</span> from published
              airline schedules.
            </div>
          }
          body={
            <div style={{ width: "870px", margin: "0 auto" }}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="ada-index-body">
                    <div className="ada-index-body-title">
                      A Combination of Attributes are Used to Calculate Expected
                      QSI Share
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="ada-index-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/frequency.png"
                      alt="Service Frequency"
                      style={{ paddingBottom: "10px" }}
                    />
                    <br />
                    <div className="ada-index-icon-title">
                      Service Frequency
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ada-index-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/stops.png"
                      alt="Number of Stops"
                    />
                    <br />
                    <div className="ada-index-icon-title">Number of Stops</div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ada-index-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/type.png"
                      alt="Aircraft Type/ Capacity"
                    />
                    <br />
                    <div className="ada-index-icon-title">
                      Aircraft Type/
                      <br />
                      Capacity
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="ada-index-icon">
                    <img
                      src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/attributes.png"
                      alt="Addition Important Attributes"
                    />
                    <br />
                    <div className="ada-index-icon-title">
                      Additional Important <br />
                      Trip Attributes
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ maxWidth: "1020px", margin: "0 auto" }}>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="ada-index-icon-info">
                      <div className="ada-index-icon-info-copy">
                        Helps airlines predict <span>market share</span> based
                        on future published schedules.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ada-index-icon-info">
                      <div className="ada-index-icon-info-copy">
                        Supports airlines and travel agencies to illustrate{" "}
                        <span>market competitiveness</span>.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="ada-index-icon-info">
                      <div className="ada-index-icon-info-copy">
                        Allows airlines to predict{" "}
                        <span>schedule itineraries</span> passengers prefer
                        based on relative attractiveness.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
        <ProductText
          className="ada-cabin"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-cabin-bg.png"
          title={
            <>
              <span class="icon-arc-logo" /> Cabin Class Mapping
            </>
          }
          subtitle={
            <div className="ada-cabin-copy">
              The ARC Cabin Class Mapping (CCM) provides users with the{" "}
              <span className="white">most accurate</span> and up-to-date cabin
              mapping based on carriers, routes and fare types.
              <br />
              <br />
              Instead of using legacy industry standards, ARC CCM uses{" "}
              <span>machine-learning</span> processes to identify CCM for
              carriers. Each segment RBKD is grouped into a cluster and mapped
              to a Cabin Class.
            </div>
          }
          outerBody={
            <div style={{ marginTop: "-140px" }}>
              <img
                style={{ width: "100%" }}
                src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/shadow.png"
                alt="Cabin Class Mapping"
              />
              <div class="ada-cabin-body-title" style={{ zIndex: 2 }}>
                Standardized Airline Cabin Class Mapping
              </div>
              <div style={{ background: "#000000;", marginTop: "-10px" }}>
                <img
                  style={{ width: "100%" }}
                  src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-cabin-map.png"
                  alt="Cabin Class Mapping"
                />
              </div>
            </div>
          }
        />
        <ProductText
          id="tci"
          className="ada-trip"
          backgroundImage="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-trip-bg.png"
          title={
            <>
              <span class="icon-arc-logo" /> Trip Classification Indicator
            </>
          }
          subtitle={
            <div className="ada-cabin-copy">
              Gain valuable insight into passenger behavior with ARC's Trip Classification Indicator (TCI) models. Powered by machine-learning algorithms and key ticket attributes, these models accurately determine whether a trip is for <span>business or leisure</span>
              .
              <br />
              <br />
              Using <span className="white">Amazon SageMaker Services</span>, the latest calibration empowers airlines and travel organizations with unparalleled visibility to make informed business decisions and unlock new growth opportunities.
            </div>
          }
          body={
            <div class="row">
              <div className="col-lg-12">
                <div style={{ maxWidth: "960px", margin: "0 auto" }}>
                  <img
                    className="img-fluid"
                    src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/ada-trip-chart.png"
                    alt="Cabin Class Mapping"
                  />
                </div>
              </div>
            </div>
          }
        />
        <ProductCallout
          title="Get Started"
          subtitle="Put ARC’s advanced data analytics and capabilities to work for your business."
          cta="Contact Us"
          img={
            <img
              src="https://www2.arccorp.com/globalassets/products--participation/advanced-data-analytics/arc-logo.png"
              alt="ARC"
            />
          }
          ctaLink="https://www2.arccorp.com/support-training/product-sales-request?Product=Advanced_Data_Analytics"
        />
      </div>
    );
  }
}

export default App;
