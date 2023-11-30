Function calling
Learn how to connect large language models to external tools.

We are aware of an issue with non-ASCII outputs in gpt-3.5-turbo-1106 and gpt-4-1106-preview, and are working on implementing a fix. When these models generate a function call and the arguments include non-ASCII characters, the API may return Unicode escape sequences instead of the Unicode character directly. For example, arguments may look like {"location": "D\u00fcsseldorf"} instead of {"location": "Düsseldorf"}. Most applications should not be affected by this, as JSON parsers in languages like Python and Javascript will parse these strings into the correct objects. To stay updated on this topic, please subscribe to this community forum thread.
Introduction
In an API call, you can describe functions and have the model intelligently choose to output a JSON object containing arguments to call one or many functions. The Chat Completions API does not call the function; instead, the model generates JSON that you can use to call the function in your code.

The latest models (gpt-3.5-turbo-1106 and gpt-4-1106-preview) have been trained to both detect when a function should to be called (depending on the input) and to respond with JSON that adheres to the function signature more closely than previous models. With this capability also comes potential risks. We strongly recommend building in user confirmation flows before taking actions that impact the world on behalf of users (sending an email, posting something online, making a purchase, etc).

This guide is focused on function calling with the Chat Completions API, for details on function calling in the Assistants API, please see the Assistants Tools page.
Common use cases
Function calling allows you to more reliably get structured data back from the model. For example, you can:

Create assistants that answer questions by calling external APIs (e.g. like ChatGPT Plugins)
e.g. define functions like send_email(to: string, body: string), or get_current_weather(location: string, unit: 'celsius' | 'fahrenheit')
Convert natural language into API calls
e.g. convert "Who are my top customers?" to get_customers(min_revenue: int, created_before: string, limit: int) and call your internal API
Extract structured data from text
e.g. define a function called extract_data(name: string, birthday: string), or sql_query(query: string)
...and much more!

The basic sequence of steps for function calling is as follows:

Call the model with the user query and a set of functions defined in the functions parameter.
The model can choose to call one or more functions; if so, the content will be a stringified JSON object adhering to your custom schema (note: the model may hallucinate parameters).
Parse the string into JSON in your code, and call your function with the provided arguments if they exist.
Call the model again by appending the function response as a new message, and let the model summarize the results back to the user.
Supported models
Not all model versions are trained with function calling data. Function calling is supported with the following models:

gpt-4
gpt-4-1106-preview
gpt-4-0613
gpt-3.5-turbo
gpt-3.5-turbo-1106
gpt-3.5-turbo-0613
In addition, parallel function calls is supported on the following models:

gpt-4-1106-preview
gpt-3.5-turbo-1106
Parallel function calling
Parallel function calling is the model's ability to perform multiple function calls together, allowing the effects and results of these function calls to be resolved in parallel. This is especially useful if functions take a long time, and reduces round trips with the API. For example, the model may call functions to get the weather in 3 different locations at the same time, which will result in a message with 3 function calls in the tool_calls array, each with an id. To respond to these function calls, add 3 new messages to the conversation, each containing the result of one function call, with a tool_call_id referencing the id from tool_calls.

In this example, we define a single function get_current_weather. The model calls the function multiple times, and after sending the function response back to the model, we let it decide the next step. It responded with a user-facing message which was telling the user the temperature in San Francisco, Tokyo, and Paris. Depending on the query, it may choose to call a function again.

If you want to force the model to call a specific function you can do so by setting tool_choice with a specific function name. You can also force the model to generate a user-facing message by setting tool_choice: "none". Note that the default behavior (tool_choice: "auto") is for the model to decide on its own whether to call a function and if so which function to call.

Example invoking multiple function calls in one response

You can find more examples of function calling in the OpenAI Cookbook:
Function calling
Learn from more examples demonstrating function calling
Tokens
Under the hood, functions are injected into the system message in a syntax the model has been trained on. This means functions count against the model's context limit and are billed as input tokens. If running into context limits, we suggest limiting the number of functions or the length of documentation you provide for function parameters.

It is also possible to use fine-tuning to reduce the number of tokens used if you have many functions defined.