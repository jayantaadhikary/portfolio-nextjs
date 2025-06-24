---
title: "Ollama API - Generate responses from LLMs"
published: true
subtitle: "Generate responses from LLMs using Ollama's REST API and Python"
date: "2024-02-14"
---

Ollama allows us to run open-source Large language models (LLMs) locally on our system. If you don't have [Ollama](https://ollama.ai) installed on your system and don't know how to use it, I suggest you go through my [Beginner's Guide to Ollama](https://jayantaadhikary.com/blog/ollama-beginner). It will guide you through the installation and initial steps of Ollama.
In this article, I am going to share how we can use the REST API that Ollama provides us to run and generate responses from LLMs. I will also show how we can use Python to programmatically generate responses from Ollama.

### Steps

1. Ollama API is hosted on localhost at port 11434. You can go to the [localhost](http://localhost:11434/) to check if Ollama is running or not.
2. We will use curl in our terminal to send a request to the API.
   `curl http://localhost:11434/api/generate -d '{
  "model": "llama2-uncensored",
  "prompt": "What is water made of?"
}'`
   Here I am using the llama2-uncensored model but you can use any available models that you downloaded through Ollama.
   We can also send more parameters such as stream, which when set to false will only return a single JSON object as a response.
   ![Curl to Ollama](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qgjd9agir9mouqxwbh76.png)
3. Now, as we see, the `/api/generate` endpoint is used to generate a response/completion for a given prompt. There are various endpoints that we can use for different purposes. You can check them out at the [API Documentation](https://github.com/ollama/ollama/blob/main/docs/api.md) of Ollama.

### Generating Responses through Ollama API using Python

Now that we know about the REST API Ollama provides, we can use Python to generate responses programmatically.

1. Create a python file. Import requests and json library.
   `import requests
import json`
2. Create the url, headers, and data variables with values like the image below
   ![variable declaration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rjbpr7zg38nomcewo533.png)
3. Now use the post method of the response library and pass in the url, headers, and data variables that we created above. Store the response in a variable.
   `response = requests.post(url, headers=headers, data=json.dumps(data))`
4. Now check the status code of the response. If it is 200, print the response text, else print the error. We can extract the exact response text from the JSON object like the snapshot below.
   ![Response text](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h0lz4dlqgnfbzleyrk5b.png)
5. Run the program :)

The complete snapshot of the code is attached below.
![Code snapshot](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uho1mp16j322zgbl4fgv.png)

### Conclusion

By following the steps above you will be able to run LLMs and generate responses locally using Ollama via its REST API. You can now use Python to generate responses from LLMs programmatically. Ollama is an amazing tool and I am thankful to the creators of the project!
