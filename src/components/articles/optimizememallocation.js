import React from "react";
import Breadcrumbs from "../breadcrumbs";
import ArticleInfo from "./articleinfo";
import Gist from "react-gist";

import ArticleImage from "../../assets/img/articles/optimizememallocation1.png";

const Article = () => {
  const summary =
    "A simple technique to avoid Garbage Collector (GC) pressure for large applications where GC performance is a must.";
  // <!-- ======= Portfolio Details Section ======= -->
  return (
    <React.Fragment>
      <Breadcrumbs title="Optimize Memory Allocation in a Producer / Consumer Pattern (C#)" />
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <h2>Introduction</h2>
              <p>
                Consumer / Producer Pattern is an example of a multi-thread synchronization problem: two threads, one producing data and another consuming data.
              </p>
              <p>The produced data usually comes from a external system or component and needs to be transformed into a new structure (DTO) known and designed to be used by the consumer (this allows, for example, avoid coupling between the two systems or components).</p>
              <p>This transformation means creating new objects, and for large applications, where memory allocation must be optimized, to avoid Garbage Collection, if the produced data is significant this will create additional GC pressure and you will start seeing performance issues.</p>
              <p>This article shows an example using an ObjectPool (a concept similar to <a href="https://docs.microsoft.com/en-us/dotnet/api/system.buffers.arraypool-1?view=netcore-3.0" target="_blank"> ArrayPool</a>), but uses it for holding objects, to be reused and therefore minimize object creation.</p>
              <p>The Producer / Consumer classes uses System.Threading.Channels and is based in the example described in this article.</p>
              <p>The full code of this example can be found in <a href="https://github.com/rochar/ConsumerPRoducerObjectPoolSample" target="_blank">GitHub</a>.</p>

              <h2>Object Pool Implementation</h2>
              <p>The <em>ObjectPool</em> is responsible to keep created objects and to Rent them to any client requiring a new one. The client is responsible to Return it to the pool if not needed.</p>
              <p>If no object is available in the pool the <em>Rent</em> method will create a new object using the _objectGenerator function, otherwise, will return an object from the pool.</p>
              <p>The <em> Return</em> method will add the object back to the pool.</p>

              <Gist id="35c703ee434284d1e5ebec994e1e2e49"></Gist>
              
              <p>One important property in the maxElements that the pool can hold and this has to do with the problem you are trying to solve, it should be the minimum value that fits your problem: minimize object creation and minimize memory consumption.</p>

              <h2>Producer / Consumer Implementation</h2>              
              <h3>Producer</h3>
             
             <p>This producer simulate data being returned from a external system, it returns an <em>ExternalDto</em> (not owned by the component that we are developing) and maps it to a DomainDto (owned by our component) and adds it to the channel:</p>
             <Gist id="59179a993d6d0db91e06649198010e25"></Gist>
             <h3>Consumer</h3>
             <p>The consumer retrieves data from the channel and processes it:</p>
             <Gist id="b6ed4db5577bb8f9a0a6482f479b35dd"></Gist>

             <h3>Producer With Pool</h3>
             <p>Using the pool instead of creating a DomainDto, the producer rents it from the pool, so it can be a new object or an already existing one.</p>
             <Gist id="ed580840c6e351a27dcc5679242f7870"></Gist>
             
             <h3>Consumer With Pool</h3>
             <p>The only difference is that the Consumer returns the object to the pool after processing it:</p>
             <Gist id="eb5128efb86a67a0b6df98bda165b285"></Gist>
             
             <h2>Benchmark</h2>
            <p>The example on GitHub uses <a href="https://github.com/dotnet/BenchmarkDotNet" target="_blank">BenchmarkDotNet</a> to measure the allocated Memory and to compare performance. The benchmark simulates a producer / consumer with 100k, 1M and 5M objects produce and consumed:</p>
              <figure className="text-center">
                <img src={ArticleImage} alt="Benchmark Results" />
                <figcaption className="figure-caption">Benchmark Results</figcaption>
              </figure>
              <p>The Delta between the memory Allocated it’s the exact gain of using the Pool and not creating new objects. In this case the DomainDto is a very light class, even so we can see considerable gains for 100k objects.</p>
              <p>For the performance: in the Mean we can not see any real difference, because DomainDto is light and so the creation of this object is not very expensive.</p>
              <p>The correlation that seems to exists between the different results and variables (Median, Gen 0) is related to the fact that the producer/consumer are simulated and the produce/consumed elements are done at exactly same rate in the full execution. In a real world application this will not happen.</p>
              <h2>Important considerations</h2>
              <p>Remember the <em>maxElements</em>  parameter of <em>ObjectPools</em> class, this value should be related to the difference between producer and consumer throughput, if you are producing faster than consuming this value should be higher, otherwise can be lower. maxElements can be the expected produce elements in queue + delta.</p>
              <hr></hr>
              <h2>Conclusion</h2>
              <p>If your application suffers from Garbage Collection and you are continuous creating and releasing objects consider to use ObjecPool concept. The Producer Consumer Pattern is a good place to include it.</p>
              <p>Do measure your application for any change.</p>

              <p>See you soon.</p>
              
            </div>
            <ArticleInfo
              category="C#"
              date="Nov 10, 2019"
              githuburl="https://github.com/rochar/ConsumerPRoducerObjectPoolSample"
              summary={summary}
            ></ArticleInfo>
          </div>
        </div>
      </section>
    </React.Fragment>
  );

  {
    /* <!-- End Portfolio Details Section --> */
  }
};

export default Article;
