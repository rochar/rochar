import React from "react";
import Breadcrumbs from "../breadcrumbs";
import ArticleInfo from "./articleinfo";
import Gist from "react-gist";

import ArticleImage from "../../assets/img/articles/cudakernelsfrommanagedcode1.png";
import ArticleImage2 from "../../assets/img/articles/cudakernelsfrommanagedcode2.png";
import ArticleImage3 from "../../assets/img/articles/cudakernelsfrommanagedcode3.png";
import ArticleImage4 from "../../assets/img/articles/cudakernelsfrommanagedcode4.png";
import ArticleImage5 from "../../assets/img/articles/cudakernelsfrommanagedcode5.png";

import ArticleImageKeepItClean from "../../assets/img/articles/avoidrelaycommands.jpg";



const Article = () => {
  const summary =
    "Tutorial on how to call CUDA Kernels from a .Net (C#) library without any third party dependencies, “simple and direct”!";
  // <!-- ======= Portfolio Details Section ======= -->
  return (
    <React.Fragment>
      <Breadcrumbs title="Call CUDA kernels from Managed Code (.Net C#) in a simple way" />
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <h2>Introduction</h2>
              <p>
              This is a small tutorial on how easily we can call a CUDA Kernel from a .Net library without relying on third party or any complex code. Its simple, direct, easy to debug and maintain, but the trade-off is you need to implement a “new entry point” to each new kernel you add.
              </p>
              <p>I assume that you already have the basic knowledge for CUDA Programming and .Net. In this tutorial we are using .Net 6.0 (Core), the steps are the same for .Net Framework. All source code can be found <a href="https://github.com/rochar/simplecudanet/tree/1.0" target="_blank">here</a>.</p>
              <hr></hr>
              <h2>Step 1 — Install CUDA Toolkit</h2>
              <p>The latest version can be found here <a href="https://developer.nvidia.com/cuda-downloads" target="_blank">CUDA Toolkit 11.6 Update 1 Downloads | NVIDIA Developer</a>. You can also see the <a href="https://docs.nvidia.com/cuda/cuda-installation-guide-microsoft-windows/index.html#build-customizations-for-existing-projects"> Installation Guide Windows :: CUDA Toolkit Documentation (nvidia.com)</a></p>
              <p>When the installation is completed open the command line and type: nvcc -v</p>
              <p>You should see something like this (you may need to restart the machine):</p>
              <figure className="text-center">
                <img src={ArticleImage} alt="Checking CUDA is properly installed." />
                <figcaption className="figure-caption">Checking CUDA is properly installed.</figcaption>
              </figure>
              <h2>Step 2 — Setup C++/CLI project in Visual Studio</h2>
              <p>I will start by creating a CLR Class Library, to be able to mix managed code and unmanaged.</p>
              <p>For more details see <a href="https://docs.microsoft.com/en-us/cpp/dotnet/mixed-native-and-managed-assemblies?view=msvc-170" target="_blank"> Mixed (Native and Managed) Assemblies | Microsoft Docs</a></p>
              <p>Open Visual Studio, in languages select C++ and search by clr, you should see something like this:</p>
              
              <figure className="text-center">
                <img src={ArticleImage2} alt="Create a new CLR class library." />
                <figcaption className="figure-caption">Create a new CLR class library.</figcaption>
              </figure>
              <p>Select CLR Class Library (&lt;the .Net Version that you intend to target&gt;) and create the project.</p>
              <p> Open the Project Properties and in Configuration Properties &gt; Advanced &gt; C++/CLI Properties you can confirm the .Net Version that is being targeted.</p>
              <figure className="text-center">
                <img src={ArticleImage3} alt="Target .Net 6.0." />
                <figcaption className="figure-caption">Target .Net 6.0.</figcaption>
              </figure>
              <p>Next add CUDA as target, in Build Dependencies &gt; Build Customizations select CUDA:</p>
              <figure className="text-center">
                <img src={ArticleImage4} alt="Add CUDA targets." />
                <figcaption className="figure-caption">Add CUDA targets.</figcaption>
              </figure>
              <p>Last step link the cudart.lib. For that open the project properties and in Configuration Properties &gt; Linker &gt; Input &gt; Additional Dependencies add cudart.lib:</p>
              <figure className="text-center">
                <img src={ArticleImage5} alt="Link the cudart.lib." />
                <figcaption className="figure-caption">Link the cudart.lib.</figcaption>
              </figure>
              <h2>Step 3 — Create the first CUDA Kernel</h2>
              <p>In this step we will create a simple kernel to add two vector in the GPU. Lets start by adding an header <i>AddVectorsKernel.cuh</i> , in this header the RunAddVectorsKernel is defined and is the C++, “unmanaged entry point” to call the Kernel.</p>
              <Gist id="cc64b5f673b1179a921507080954b365"></Gist>
              <p>Next, let’s create the kernel <i>AddVectorsKernel.cu</i></p>             
              <Gist id="47fab677f2774dd5d943e4dafdabf0fa"></Gist>
              <p>Now lets add the “managed entry point” for the kernel, the header AddVectorsKernel.h and the cpp <i>AddVectorsKernel.cpp</i>.</p>
              <Gist id="2ac8ecfc33af01a6b94ce9b90b372879"></Gist>
              <p>In the header I define a managed static class and a static function that will be called by the managed library. This function accepts two managed arrays and outputs the result of adding both also as managed array.</p>
              <Gist id="400703f3afe71387074d978cac9e6aa4"></Gist>

              <h2>Step 4— Call the Kernel from .Net Console App</h2>
              <p>Now Create a Console App, and reference the C++/CLI project created in Step 2. To call the Kernel just past the code:</p>
              <Gist id="c9543596e2a842140a0e38e100baa4af"></Gist>
              <p>This is a simple solution, easy to maintain and evolve and can be a good solution when you just want to call CUDA Kernels and have a “manage API” in top of it. In a future I will improve this solution and remove some boilerplate code an make our life easier.</p>
              <p>See you soon.</p>
              <figure className="text-center">
                <img src={ArticleImageKeepItClean} alt="Keep it Clean, Keep it Simple." />
                <figcaption className="figure-caption">Keep it Clean, Keep it Simple.</figcaption>
              </figure>
            </div>
            <ArticleInfo
              category="C#, CUDA"
              date="Apr 14, 2020"
              summary={summary}
              githuburl="https://github.com/rochar/simplecudanet/tree/1.0"
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
