# Connection between components

### Q: How does App Component use Greeting Component?

![image](https://user-images.githubusercontent.com/23176181/177015355-8cacf079-5ba0-4ee0-912e-197959b473d6.png)

* Angular starts off with **App Module**. This is where all main functionalities are imported.
* I created a separated moduled called **Shared**. This where all UI pieces (components) will be placed.
* Each UI component needs to be imported in a module, **App**, **Shared** or it's own module (**Greeting module**)
* **Shared Module** is in charge of exporting all components/modules that are *shared.*
* **Greeting Module** declares and exports **Greeting Component**
* **App Module** or any other module can import any component or module that will be used within it. 
* In this case, **App** imports **Shared** that exports **Greeting** module (that is in charge of **Greeting Component**)


## More on,

* [What are Angular Modules](https://angular.io/guide/ngmodule-faq)
* [What is CommonModule and why we import it](https://www.geeksforgeeks.org/what-is-commonmodule-in-angular-10/)
