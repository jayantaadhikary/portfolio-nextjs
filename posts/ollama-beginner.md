---
title: "Installing LLMs locally - Beginner's Guide"
published: true
subtitle: "Run Large Language Models locally on your system using Ollama"
date: "2024-02-13"
---

Large Language Models or LLMs are machine learning models trained on huge sets of data and can be used to recognize and generate texts. One of its most common use cases is Generative AI, ie, when given a prompt or a question, it can provide text in reply.
Running open-source LLMs in our system locally can be quite troublesome but thanks to a few tools like Ollama and LM Studio, it can be very straightforward. In this article, I would like to share how we can use Ollama to install and run LLMs easily.

### Installation

![ollama.ai](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8uwygbs9jejrqaqd0ac5.png)

1. Visit Ollama's website [https://ollama.ai](https://ollama.ai)
2. When you click on the download button, you get to choose your operating system. Currently, Ollama can only be installed in MacOS and Linux. They are adding Windows support soon!

### Run Ollama

1. After installing Ollama, you can go to your terminal, and use the `ollama` command to check if it has been installed properly. You will get the available commands and flags for Ollama.
   ![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gjv250cxvfiyaq4a5t42.png)
2. You can use `ollama list` to view all the downloaded models. It should be empty if you are using Ollama for the first time.
3. You can download models using `ollama pull model-name`, where model-name is the name of the model you wish to download. Models downloadable from Ollama directly can be checked at [https://ollama.com/library](https://ollama.com/library).
   I am using LLama2-Uncensored for example. You can download it using `ollama pull llama2-uncensored`.
   There are ways you can use models that are not directly available at Ollama, but that can be quite confusing for beginners, so, I won't share it in this guide.
   ![Download model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jz3xawi93116q93pr2xf.png)
4. After the model is downloaded, you can run it using the run command, ie, `ollama run llama2-uncensored`.
5. The model runs and allows you to send a prompt. Let's try asking a basic question such as "What is water made of?".
   It replies with an answer.
   ![run model](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/lq1u133m1lqf4g7j1nbb.png)
6. You can exit the prompt session using /bye.

This is how you can use Ollama to run LLMs locally on your system. You can also use Ollama's REST API which is served at localhost:11434, to run and manage models. I will explain how to use the REST API in a different blog to keep this post simple for beginners.
You can check out [https://github.com/ollama/ollama](https://github.com/ollama/ollama) to know more about Ollama.
I am very grateful to the creators of this project!

Have fun installing and running models locally!
