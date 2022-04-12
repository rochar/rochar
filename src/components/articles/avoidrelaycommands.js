import React from "react";
import Breadcrumbs from "../breadcrumbs";
import ArticleInfo from "./articleinfo";
import Gist from "react-gist";

import ArticleImage from "../../assets/img/articles/avoidrelaycommands.jpg";

const Article = () => {
  const summary =
    "Multiple Relay Commands instances can become a source of serious CPU usage for long living View Models in a WPF application using MVVM pattern.";
  // <!-- ======= Portfolio Details Section ======= -->
  return (
    <React.Fragment>
      <Breadcrumbs title="Avoid Relay Commands and prevent CPU usage peaks in WPF(C#)" />
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <h2>Introduction</h2>
              <p>
                When using MVVM pattern in a WPF application we usually create
                custom ICommand implementations, one of them is known as Relay
                Command. If you are unfamiliar with commands a good starting
                point is{" "}
                <a
                  href="https://docs.microsoft.com/en-us/dotnet/desktop/wpf/advanced/commanding-overview?view=netframeworkdesktop-4.8"
                  target="_blank"
                >
                  here
                </a>
                .
              </p>
              <p>
                I have worked in several WPF applications that had peaks on CPU
                usage, and profiling the application, using{" "}
                <a href="https://www.jetbrains.com/profiler/" target="_blank">
                  dotTrace
                </a>
                &nbsp;profile for example, we could see several millions of
                calls to the CanExecute method. This type of commands are spread
                around the application and have significant impact for long
                living View Models, like the “Root” View Model, that could have
                hundred of commands, for example: in menus, context menus ,
                toolbars and other input controls. In this article I explain why
                Relay Commands may have a performance hit and I give some clean
                and simple solutions to solve it.
              </p>
              <h2> Relay Commands</h2>
              The first timed I read about Relay Commands was in{" "}
              <a
                href="https://github.com/lbugnion/mvvmlight/blob/master/GalaSoft.MvvmLight/GalaSoft.MvvmLight%20(PCL)/Command/RelayCommand.cs"
                target="_blank"
              >
                MVVM Light Toolkit
              </a>
              , since then I have seen several implementation examples like this
              <a
                href="https://www.technical-recipes.com/2016/using-relaycommand-icommand-to-handle-events-in-wpf-and-mvvm/"
                target="_blank"
              >
                {" "}
                one
              </a>
              . So let us look to an usual Relay Command implementation in the
              next snippet:
              <Gist id="6229f82df53f2856a49ed8b1595fbcf5"></Gist>
              <p>
                To create an instance (see the constructor) you only need to
                implement the action for the execute parameter(code to execute
                when a user clicks a button for example) and the action for the
                canExecute (state defining if the command can be executed) and
                that is the main advantage of it, simple and fast to implement.
              </p>
              <p>A good example is the print command:</p>
              <Gist id="0e78983201513a4590116712a6dc5af0"></Gist>
              <p>
                {" "}
                The print command command can be executed when the print service
                is online and just prints when invoked, simple as that, no need
                to explicitly raise the CanExecuteChanged event(will explain
                later why) to notify the UI to refresh / invalidate the current
                state of the inputs associated and therefore no need to think or
                implement the logic that can change the CanExecute state. In
                many cases this is an advantage because you can quickly
                implement the command. If command depends on third party
                services or data outside of our domain, that we do not own.
                Probably that third party service is not able to notify the
                state changed, so we need to continuously querying it, in this
                case the relay command fits well.
              </p>
              <p>
                <strong>
                  Why don’t we need to call explicitly the CanExecuteChanged
                  EventHandler?
                </strong>
              </p>
              <p>Looking to the following snippet of the Relay Command:</p>
              <Gist id="ca4f05673c26800d9c595b9fae40b106"></Gist>
              <p>
                Whenever the CanExecuteChanged is subscribed in fact it’s
                subscribing the CommandManager.RequerySuggested, and this is the
                root cause of the performance issue that we may face:
              </p>
              <figure className="text-end">
                <blockquote className="blockquote">
                  <p>
                    Occurs when the{" "}
                    <a
                      href="https://docs.microsoft.com/en-us/dotnet/api/system.windows.input.commandmanager?view=netframework-4.8"
                      target="_blank"
                    >
                      {" "}
                      CommandManager{" "}
                    </a>{" "}
                    detects conditions that might change the ability of a
                    command to execute
                  </p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  Microsoft documentation{" "}
                  <cite title="Source Title">CommandManager Class</cite>
                </figcaption>
              </figure>
              <p>
                It’s quite difficult to have an overview when this event is
                raised, because its trigger outside the CommandManager
                boundaries, you can dig the dotnet/WPF{" "}
                <a target="_blank" href="https://github.com/dotnet/wpf">
                  {" "}
                  repository{" "}
                </a>
                . If you add a break point to the CanExecute method you will see
                this is called very very very often. A mouse move is sufficient
                to trigger this event!
              </p>
              <h2>Commands that can always be executed</h2>
              <p>
                Look to your commands and do not get surprised if a considerable
                part of then returns always true on the CanExecute method. An
                easy solution is to implement a command that simple returns true
                and completely avoid the Relay Command:
              </p>
              <Gist id="7f824b8a18445405024e8904cfb42655"></Gist>
              <p>With this change you easily save a lot of CPU usage.</p>
              <h2>Action or Delegate Commands</h2>
              <p>
                To remove the dependency to CommandManager.RequerySuggested, we
                need to code the rules that can change the CanExecute state. To
                do that we replace the Relay Command for a very similar Action
                Command:
              </p>
              <Gist id="50a417af8354992895de12d91f756fb3"></Gist>
              <p>
                The main difference is that there is not subscription to
                CommandManager.RequerySuggested. The previous PrintCommand
                example needs to be change to:
              </p>
              <Gist id="a1a885df1bce1b6017208b469a00a7b5"></Gist>
              <p>
                When IsOnlineChanged is raised, in PrintService, we need to
                explicitly call the RaiseCanExecuteChanged, in order to notify
                the UI to refresh according to the new state of the command.
                This small change may reduce the number of calls to CanExecute
                method to only one call as long asthe PrintService state does
                not change and this is much more optimized comparing to the
                Relay Command.
              </p>
              <h2>Avoid logic inside CanExecute</h2>
              <p>
                Another source of performance issues is that we tend to compute
                the CanExecute state inside the method itself. If this
                computation is expensive, and called multiple times, although
                the state did not change (the command can be attached to
                multiple inputs), it will have a performance hit. To resolve
                this issue we just need to compute it to a local variable and
                then return always the local variable value:
              </p>
              <Gist id="cbfb8192e9aced3ace6311da41e6e5f2"></Gist>
              <h2>Conclusion</h2>
              <p>
                If you are developing a application and not a POC avoid the
                usage of Relay Commands or similar, this will save you for sure
                a lot of rework. Unless it’s used in very specif situations:
                short living view models or has dependencies on data that needs
                to be queried continuously.
              </p>
              <p>
                In my next post I will show how can we improve this
                implementation using Reactive Extensions, so keep in touch.
              </p>
              <p>See you soon.</p>
              <figure className="text-center">
                <img src={ArticleImage} alt="Keep it simple. Keep it clean." />
                <figcaption className="figure-caption">Keep it simple. Keep it clean.</figcaption>
              </figure>
            </div>
            <ArticleInfo
              category="C#"
              date="Apr 14, 2020"
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
