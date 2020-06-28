# # Scoutium Case

You may examine the [presentation slides](https://docs.google.com/presentation/d/1r4R7cesgjsZ0MgcJgeRoBTzIaE4skgUA7comPsqwHQQ/edit?usp=sharing) to have a quick-fact information about the sample application.

## # Protips
* Structural inspiration 
 > I'm an expert / long term / enterprise level ExtJS developer. Developing high-level, Abstraction and OOP based application to achieve data-driven, good performance app.
The `Migrating from ExtJS to React` [blog](https://moduscreate.com/blog/extjs-to-react-migration-to-open-source/) and [repository](https://github.com/ModusCreateOrg/extjs-reactjs-examples) covers a lot of possibilities that i would use within React and the application. 
Also benefit on another boilerplate work for enterprise-level based React application; [offline-first foundation/react-boilerplate](https://codesandbox.io/s/react-boilerplate-2pii7). 
* Localization / Translations	
> Scoutium applications need to be bilingual while the users' background will belong to the different countries, languages, measurement units. etc.
Constants
As long as applications getting bigger; application-wide changes would be applied with consts to make changing / refactoring process less pain and trustable.
 Backend endpoints; Component types, (css) class names, item id; etc. would store within const values. Thus any later change would be  easy.
* Lazy Loading - Caching
>End-users should not force to keep request again and again for same data OR should not request to the non-rendered-components until reached that point.
* Store management / Modelling / Data Validation 
>  As long as application going to be complex the store management becomes more important manage user data. 
  Meanwhile any data usage needs to be defined and shaped in a good way for both end-user and back-end satisfaction.
* Folder Structure
> MVP level: Current structure is `file-type` based for the sake of simplicity. 
Enterprise level: Both `file-type` and `feature-type` would be used together. 
Especially MVVM design pattern lets for the `feature-type`, thus low-level components/class would manage with `feature-type` and most common/generic/abstraction based components/classes should follow the `file-type`.
* Assets 
> Provide availability for the `process.env`
Share constant values all along app with the `process.env`.
* Test cases 
> UI, Unit, Flow, Stress test cases and Test Reports.
* Documentation 
> Dev target: Exist developer, new comers, interns; Non-Developers: DevOps, Business Analyst; End-user: How to use guides.  
