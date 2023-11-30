Actions in GPTs
Looking for ChatGPT? Head to chat.openai.com.
GPTs and custom Actions are here!

We’re rolling out custom versions of ChatGPT that you can create for a specific purpose—called GPTs. GPTs are a new way for anyone to create a tailored version of ChatGPT to be more helpful in their daily life, at specific tasks, at work, or at home—and then share that creation with others. We are excited to announce Actions, which build on plugins. Actions take many of the core ideas of plugins while also introducing many new features builders have been asking for.
What is a GPT?
GPTs provide the ability to deeply customize ChatGPT with all new capabilities. GPTs also lower the barrier for builders. You can read more in the GPT launch blog post and the deep dive on GPT's from OpenAI Developer Day:


What is an action?
In addition to using our built-in capabilities, you can also define custom actions by making one or more APIs available to the GPT. Like plugins, actions allow GPTs to integrate external data or interact with the real-world. Connect GPTs to databases, plug them into emails, or make them your shopping assistant. For example, you could integrate a travel listings database, connect a user’s email inbox, or facilitate e-commerce orders.

The design of actions builds upon insights from our plugins beta, granting developers greater control over the model and how their APIs are called. Migrating from the plugins beta is easy with the ability to use your existing plugin manifest to define actions for your GPT.

Create an Action
To create an Action, you can define an OpenAPI specification similarly to that of a plugin with a few changes listed below. If you have a plugin today, creating a GPT with an action should only take a few minutes.

You can start by creating a GPT in the ChatGPT UI and then connect it to your existing plugin OpenAPI reference.

From the GPT editor:

Select "Configure"
"Add Action"
Fill in your OpenAPI spec or paste in a URL where it is hosted (you can use an existing plugin URL)
Actions vs Plugins
Like ChatGPT plugins, Actions allow you to connect a GPT to a custom API. There are a few noticeable differences between Actions and plugins which you can see mentioned below.

Functions
Endpoints defined in the OpenAPI specification are now called "functions". There is no difference in how these are defined.

Hosted OpenAPI specification
With Actions, OpenAI now hosts the OpenAPI specification for your API. This means you no longer need to host your own OpenAPI specification. You can import an existing OpenAPI specification or create a new one from scratch using the UI in the GPT creator.

Consequential flag
In the OpenAPI specification, you can now set certain endpoints as "consequential" as shown below:

get:
  operationId: blah
  x-openai-isConsequential: false
post:
  operationId: blah2
  x-openai-isConsequential: true
If the x-openai-isConsequential field is true, we treat the operation as "must always prompt the user for confirmation before running" and don't show an "always allow" button (both are new features of GPTs designed to give users more control).
If the x-openai-isConsequential field is false, we show the "always allow button".
If the field isn't present, we default all GET operations to false and all other operations to true
Multiple authentication schemas
Actions now support multiple authentication schemas which can be set on a per-endpoint basis. This means you can have some endpoints that require authentication and some that don't.

This can be set as a components -> securityschemes -> object in the OpenAPI spec, and on each operation in the spec there will be a security object. If no security object is specified in the operation, we consider it unauthed or noauth.

Updated store process
The GPT marketplace will supersede the plugin store. As the GPT marketplace rolls out, we will have more to share.