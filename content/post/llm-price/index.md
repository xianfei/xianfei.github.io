---
author: Xianfei
title: 主流大模型&中文大模型API价格汇总！
date: 2024-10-20
slug: llm-price
image: banner.png
color: "#5c9dd2"
categories:
    - 大语言模型
    - AI开发
---

该文章转自：https://blog.chs.pub/p/24-04-llmapiprice/ ，本人稍加修改

## 前言


最近正在尝试使用 API 调用 LLM，发现各个大厂的 API 价格都有差异，所以想整理一下各个大厂的 API 价格对比，方便自己，也方便他人。

不包含 Embedding 、图片生成等模型的价格。

> 参考： 1M = 1000K = 100 0000 = 1000,000

> 纯手动整理，本文会及时更进各厂商对价格的调整，如有疏漏烦请指出，谢谢。

## OpenAI

这个不用说，先驱者。它将是我们评定其他大厂的参考标准。

[官方的价格页面](https://openai.com/pricing)

Batch API 调用可以立省 50%。

### GPT-3.5-Turbo

退役了，现在仅能通过 API 调用。

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-3.5-turbo-0125       | $0.50 / 1M tokens       | $1.50 / 1M tokens        |
| gpt-3.5-turbo-instruct    | $1.50 / 1M tokens       | $2.00 / 1M tokens        |

根据现在的汇率（1USD=7.22CNY），CNY 的表格如下：

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-3.5-turbo-0125       | ￥ 3.61 / 1M tokens     | ￥ 10.83 / 1M tokens     |
| gpt-3.5-turbo-instruct    | ￥ 10.83 / 1M tokens    | ￥ 14.44 / 1M tokens     |

### GPT-4o mini

替代 GPT 3.5 Turbo 的模型，加量不加价。

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4o-mini               | $0.15 / 1M tokens       | $0.60 / 1M tokens        |
| gpt-4o-mini-2024-07-18   | $0.15 / 1M tokens       | $0.60 / 1M tokens        |

根据现在的汇率（1USD=7.22CNY），CNY 的表格如下：

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4o-mini               | ￥ 1.083 / 1M tokens    | ￥ 4.332 / 1M tokens     |
| gpt-4o-mini-2024-07-18   | ￥ 1.083 / 1M tokens    | ￥ 4.332 / 1M tokens     |

### GPT-4

好贵的

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4                     | $30.00 / 1M tokens      | $60.00 / 1M tokens       |
| gpt-4-32k                 | $60.00 / 1M tokens      | $120.00 / 1M tokens      |

根据现在的汇率（1USD=7.22CNY），CNY 的表格如下：

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4                     | ￥ 216.6 / 1M tokens    | ￥ 433.2 / 1M tokens     |
| gpt-4-32k                 | ￥ 433.2 / 1M tokens    | ￥ 866.4 / 1M tokens     |

### GPT-4-Turbo

这个价格就合理多了，但是依然较为昂贵。

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4-0125-preview        | $10.00 / 1M tokens      | $30.00 / 1M tokens       |
| gpt-4-1106-preview        | $10.00 / 1M tokens      | $30.00 / 1M tokens       |
| gpt-4-1106-vision-preview  | $10.00 / 1M tokens      | $30.00 / 1M tokens       |

根据现在的汇率（1USD=7.22CNY），CNY 的表格如下：

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4-0125-preview        | ￥ 72.2 / 1M tokens     | ￥ 216.6 / 1M tokens     |
| gpt-4-1106-preview        | ￥ 72.2 / 1M tokens     | ￥ 216.6 / 1M tokens     |
| gpt-4-1106-vision-preview  | ￥ 72.2 / 1M tokens     | ￥ 216.6 / 1M tokens     |

### GPT-4o

新出厂的强大模型，具备多模态，上下文 128k，速度更快价格更便宜，离谱。

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4o                     | $5.00 / 1M tokens       | $15.00 / 1M tokens       |
| gpt-4o-2024-05-13         | $5.00 / 1M tokens       | $15.00 / 1M tokens       |

根据现在的汇率（1USD=7.22CNY），CNY 的表格如下：

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| gpt-4o                     | ￥ 36.10 / 1M tokens    | ￥ 108.30 / 1M tokens    |
| gpt-4o-2024-05-13         | ￥ 36.10 / 1M tokens    | ￥ 108.30 / 1M tokens    |


### OpenAI o1-preview

o1-preview is our new reasoning model for complex tasks. This model is designed to handle large-context problems with up to 128K tokens. It has a knowledge cutoff as of October 2023 and is capable of generating complex reasoning solutions across a variety of domains.

| Model            | Input               | Cached Input*           | Output**                |
|------------------|---------------------|-------------------------|-------------------------|
| o1-preview       | $15.00 / 1M tokens  | $7.50 / 1M tokens       | $60.00 / 1M tokens      |
| o1-preview-2024-09-12 | $15.00 / 1M tokens  | $7.50 / 1M tokens       | $60.00 / 1M tokens      |

**Note:** Output tokens include internal reasoning tokens generated by the model that are not visible in API responses.

CNY Conversion (1 USD = 7.22 CNY)

| Model            | Input                   | Cached Input*           | Output**                |
|------------------|-------------------------|-------------------------|-------------------------|
| o1-preview       | ￥108.30 / 1M tokens     | ￥54.15 / 1M tokens      | ￥433.20 / 1M tokens     |
| o1-preview-2024-09-12 | ￥108.30 / 1M tokens     | ￥54.15 / 1M tokens      | ￥433.20 / 1M tokens     |

---

### OpenAI o1-mini

The o1-mini is a faster, more cost-efficient model optimized for coding, math, and scientific tasks. It shares the 128K context window and has a knowledge cutoff as of October 2023. It provides users with an efficient option for tasks requiring logical reasoning without the need for more advanced reasoning capabilities.

| Model            | Input               | Cached Input*           | Output**                |
|------------------|---------------------|-------------------------|-------------------------|
| o1-mini          | $3.00 / 1M tokens   | $1.50 / 1M tokens       | $12.00 / 1M tokens      |
| o1-mini-2024-09-12 | $3.00 / 1M tokens   | $1.50 / 1M tokens       | $12.00 / 1M tokens      |

**Note:** Output tokens include internal reasoning tokens generated by the model that are not visible in API responses.

CNY Conversion (1 USD = 7.22 CNY)

| Model            | Input                   | Cached Input*           | Output**                |
|------------------|-------------------------|-------------------------|-------------------------|
| o1-mini          | ￥21.66 / 1M tokens      | ￥10.83 / 1M tokens      | ￥86.64 / 1M tokens      |
| o1-mini-2024-09-12 | ￥21.66 / 1M tokens      | ￥10.83 / 1M tokens      | ￥86.64 / 1M tokens      |



## 阿里云 DashScope

阿里云 DashScope，提供包括通义千问在内的各种 LLM 访问能力。 这是其 [官方文档](https://help.aliyun.com/zh/dashscope)

24.5.21 降价了。

### 通义千问

| 模型名                     | 输入价格                | 输出价格               | 上下文 token 数（可输入 token 数） |
|---------------------------|-------------------------|--------------------------|----------------------------------|
| qwen-turbo                | ￥ 2 / 1M tokens        | ￥ 6 / 1M tokens        | 8k (6k)                          |
| qwen-plus                 | ￥ 4 / 1M tokens        | ￥ 12 / 1M tokens       | 32k (30k)                        |
| qwen-max                  | ￥ 40 / 1M tokens       | ￥ 120 / 1M tokens      | 8k (6k)                          |
| qwen-max-1201             | ￥ 120 / 1M tokens      | ￥ 120 / 1M tokens      | 8k (6k)                          |
| qwen-max-longcontext       | ￥ 40 / 1M tokens       | ￥ 120 / 1M tokens      | 32k (30k)                        |
| qwen-long                  | ￥ 0.5/ 1M tokens       | ￥ 2 / 1M tokens        | 目前暂未找到相关说明              |

> 免费额度

| 模型名                     | 免费额度                          |
|---------------------------|----------------------------------|
| qwen-turbo                | 开通 DashScope 即获赠总计 2,000,000 tokens 限时免费使用额度，有效期 180 天。 |
| qwen-plus                 | 开通 DashScope 即获赠总计 1,000,000 tokens 限时免费使用额度，有效期 180 天。 |
| qwen-max 系列             | 开通 DashScope 即获赠总计 1,000,000 tokens 限时免费使用额度，有效期 30 天。 |
| qwen-long                  | 2024年5月21日0点到2024年6月21日24点，开通DashScope即获赠总计4,000,000 tokens限时免费使用额度，有效期30天。 |

### 通义千问【开源版模型】

| 模型名                     | 输入价格                     | 输出价格                   | 上下文 token 数（可输入 token 数） |
|---------------------------|-------------------------------|-----------------------------|----------------------------------|
| qwen1.5-110b-chat        | ￥ 7 / 1M tokens              | ￥ 14 / 1M tokens          | 32k (30k)                        |
| qwen-72b-chat            | ￥ 20 / 1M tokens             | ￥ 20 / 1M tokens          | 32k (30k)                        |
| qwen1.5-72b-chat         | ￥ 5 / 1M tokens              | ￥ 10 / 1M tokens          | 32k (30k)                        |
| qwen1.5-32b-chat         | ￥ 3.5 / 1M tokens            | ￥ 7 / 1M tokens           | 32k (30k)                        |
| qwen-14b-chat            | ￥ 8 / 1M tokens              | ￥ 8 / 1M tokens           | 8k (6k)                          |
| qwen1.5-14b-chat         | ￥ 2 / 1M tokens              | ￥ 4 / 1M tokens           | 8k (6k)                          |
| qwen-7b-chat             | ￥ 6 / 1M tokens              | ￥ 6 / 1M tokens           | 8k (6k)                          |
| qwen1.5-7b-chat          | ￥ 1 / 1M tokens              | ￥ 2 / 1M tokens           | 8k (6k)                          |
| qwen-1.8b-chat           | 限时免费开放中               |                             | 8k (6k)                          |
| qwen1.5-0.5b-chat        | 限时免费开放中               |                             | 32k (30k)                        |

既然 qwen 1 和 qwen 1.5 价格一样，那肯定是调用 1.5 啦。

> 免费额度：除 1.8b 这个限时免费外，其他均有时长 30 天的 100 0000 tokens 的免费额度。

### 其他

**有第三方大模型可用**

例如 LLaMa2，价格目前免费，但需申请。

## 火山云

> 字节跳动旗下

这款也降价了。

| 模型名                     | 输入价格                | 输出价格               | 上下文 token 数 |
|---------------------------|-------------------------|--------------------------|------------------|
| Doubao-lite-4k            | ￥ 0.3 / 1M tokens      | ￥ 0.6 / 1M tokens      | 4k               |
| Doubao-lite-32k           | ￥ 0.3 / 1M tokens      | ￥ 0.6 / 1M tokens      | 32k              |
| Doubao-lite-128k          | ￥ 0.8 / 1M tokens      | ￥ 1 / 1M tokens        | 128k             |
| Doubao-pro-4k             | ￥ 0.8 / 1M tokens      | ￥ 2 / 1M tokens        | 4k               |
| Doubao-pro-32k            | ￥ 0.8 / 1M tokens      | ￥ 2 / 1M tokens        | 32k              |
| Doubao-pro-128k           | ￥ 5 / 1M tokens        | ￥ 9 / 1M tokens        | 128k             |

> 免费额度均为 50 万 tokens。

### 其他

**有第三方大模型可用**

如 智谱AI（限时免费），Moonshot（与上游一致），Llama3, Mistral 等开源模型限时免费使用。

## 百度智能云

### 文心一言

单位已经统一。

| 模型                     | 输入                     | 输出                   |
|---------------------------|-------------------------|--------------------------|
| ERNIE-4.0-8K              | ￥ 120(150) / 1M tokens | ￥ 120(150) / 1M tokens  |
| ERNIE-Bot-8K              | ￥ 24 / 1M tokens       | ￥ 48 / 1M tokens        |
| ERNIE-3.5-8K              | ￥ 12 / 1M tokens       | ￥ 12 / 1M tokens        |
| ERNIE-Bot-turbo-0922      | ￥ 8(12) / 1M tokens    | ￥ 8(12) / 1M tokens     |
| ERNIE-Speed-8K            | ￥ 4 / 1M tokens        | ￥ 8 / 1M tokens         |
| ERNIE-3.5-4K-0205         | ￥ 12 / 1M tokens       | ￥ 12 / 1M tokens        |
| ERNIE-3.5-8K-0205         | ￥ 24 / 1M tokens       | ￥ 48 / 1M tokens        |
| ERNIE-3.5-8K-1222         | ￥ 12 / 1M tokens       | ￥ 12 / 1M tokens        |
| ERNIE-Lite-8K             | ￥ 3 / 1M tokens        | ￥ 6 / 1M tokens         |
| ERNIE-Speed-128K          | ￥ 4 / 1M tokens        | ￥ 8 / 1M tokens         |

> 百度宣布其两款主力模型 ENIRE Speed、ENIRE Lite 全面免费，即刻生效。

### 其他

**有第三方大模型可用**

在此仅选取部分模型的价格进行对比。

| 模型                     | 单价                     | 统一单位后的计费单价  |
|---------------------------|-------------------------|--------------------------|
| Llama-2-7B-Chat           | 0.004元/千tokens       | ￥ 4 / 1M tokens         |
| Llama-2-13B-Chat          | 0.006元/千tokens       | ￥ 6 / 1M tokens         |
| Llama-2-70B-Chat          | 0.035元/千tokens       | ￥ 35 / 1M tokens        |
| Mixtral-8x7B-Instruct     | 0.035元/千tokens       | ￥ 35 / 1M tokens        |
| Gemma-7B-it               | 0.004元/千tokens       | ￥ 4 / 1M tokens         |
| Yi-34B-Chat               | 限时免费，每个账号每天包含500次调用额度 | ￥0 / 1M tokens         |

## 零一万物

在 lmsys 获得了很不错的成绩。

| 模型                     | 单价（元 / 百万 tokens） |
|---------------------------|--------------------------|
| yi-large                  | ¥20                      |
| yi-large-turbo            | ¥12                      |
| yi-large-rag              | ¥25                      |
| yi-medium                 | ¥2.5                     |
| yi-medium-200k            | ¥12                      |
| yi-spark                  | ¥1                       |
| yi-vision                 | ¥6                       |

> 免费额度：注册送 36 元额度。

## 腾讯混元大模型

| 产品名                   | 计费单价                 | 统一单位后的计费单价  | 上下文 token 数（根据文档推测） |
|---------------------------|-------------------------|--------------------------|----------------------------------|
| 腾讯混元大模型标准版      | 0.01元 / 1000 tokens    | ￥ 10 / 1M tokens        | 16k                              |
| 腾讯混元大模型高级版      | 0.10元 / 1000 tokens    | ￥ 10 / 1M tokens        | 16k                              |

> 免费额度：时长 12 个月的 10 0000 tokens 的免费额度

## 讯飞星火

| 模型                     | 单价                     | 统一单位后的计费单价   |
|---------------------------|-------------------------|--------------------------|
| 星火大模型V1.5、V3.0、V3.5 | 0.3~0.24元 / 万 tokens  | ￥ 30~24 / 1M tokens     |

> 免费额度：个人拥有时长 12 个月的 200 0000 tokens 的免费额度，企业额度为 500 0000 tokens。

## Kimi

月之暗面的模型。超长上下文确实有独到之处。

| 模型                     | 计费单价                 |
|---------------------------|-------------------------|
| moonshot-v1-8k           | ￥ 12 / 1M tokens       |
| moonshot-v1-32k          | ￥ 24 / 1M tokens       |
| moonshot-v1-128k         | ￥ 60 / 1M tokens       |

> 免费额度：注册送 15 元额度。

## Deepseek

| 模型                     | 输入价格                | 输出价格               | 上下文长度   |
|---------------------------|-------------------------|--------------------------|--------------|
| deepseek-chat             | ￥ 1 / 1M tokens        | ￥ 2 / 1M tokens        | 32k tokens   |
| deepseek-coder            | ￥ 1 / 1M tokens        | ￥ 2 / 1M tokens        | 16k tokens   |

> 免费额度：注册送 20 元额度。

## MiniMax

| 模型名称                 | 单价                     | 统一单位后的计费单价  | 上下文 token 数 |
|---------------------------|-------------------------|--------------------------|------------------|
| abab6-chat                | 0.1元 / 千tokens        | ￥ 100 / 1M tokens       | 32768            |
| abab5.5-chat              | 0.015元 / 千tokens      | ￥ 15 / 1M tokens        | 16384            |
| abab5.5s-chat             | 0.005元 / 千tokens      | ￥ 5 / 1M tokens         | 8192             |

> 免费额度：注册送 75 元额度。

## 智谱

24.05.11 GLM-3-Turbo 降价。

| 模型                     | 单价                     | 统一单位后的计费单价  | 上下文 token 数 |
|---------------------------|-------------------------|--------------------------|------------------|
| GLM-4                     | 0.1元 / 千tokens        | ￥ 100 / 1M tokens       | 128K             |
| GLM-3-Turbo               | 0.001元 / 千tokens      | ￥ 1 / 1M tokens         | 128K             |

很明显对标的 OpenAI，定价比 OpenAI 略低。

## Mistral

| Model                     | Input (USD)             | Output (USD)            | Input (EUR)            | Output (EUR)          |
|---------------------------|-------------------------|-------------------------|-------------------------|-----------------------|
| Mistral 7B                | 0.25$ / 1M tokens       | 0.25$ / 1M tokens       | 0.2€ / 1M tokens        | 0.2€ / 1M tokens      |
| Mixtral 8x7B              | 0.7$ / 1M tokens        | 0.7$ / 1M tokens        | 0.65€ / 1M tokens       | 0.65€ / 1M tokens     |
| Mistral Small             | 2$ / 1M tokens          | 6$ / 1M tokens          | 1.85€ / 1M tokens       | 5.55€ / 1M tokens     |
| Mistral Medium            | 2.7$ / 1M tokens        | 8.1$ / 1M tokens        | 2.5€ / 1M tokens        | 7.5€ / 1M tokens      |
| Mistral Large             | 8$ / 1M tokens          | 24$ / 1M tokens         | 7.3€ / 1M tokens        | 22€ / 1M tokens       |

根据现在的汇率（1USD=7.22CNY / 1EUR=7.75），CNY 的表格如下：

| Model                     | Input (USD-CNY)        | Output (USD-CNY)       | Input (EUR-CNY)        | Output (EUR-CNY)      |
|---------------------------|-------------------------|-------------------------|-------------------------|-----------------------|
| Mistral 7B                | ￥1.805 / 1M tokens     | ￥1.805 / 1M tokens     | ￥1.55 / 1M tokens      | ￥1.55 / 1M tokens    |
| Mixtral 8x7B              | ￥5.054 / 1M tokens     | ￥5.054 / 1M tokens     | ￥5.0375 / 1M tokens    | ￥5.0375 / 1M tokens  |
| Mistral Small             | ￥14.44 / 1M tokens     | ￥43.32 / 1M tokens     | ￥14.3375 / 1M tokens   | ￥43.0125 / 1M tokens  |
| Mistral Medium            | ￥19.494 / 1M tokens    | ￥58.482 / 1M tokens    | ￥19.375 / 1M tokens    | ￥58.125 / 1M tokens   |
| Mistral Large             | ￥57.76 / 1M tokens     | ￥173.28 / 1M tokens    | ￥56.575 / 1M tokens    | ￥170.5 / 1M tokens    |

## Replicate

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| meta/llama-2-70b         | $0.65 / 1M tokens       | $2.75 / 1M tokens        |
| meta/llama-2-13b         | $0.10 / 1M tokens       | $0.50 / 1M tokens        |
| meta/llama-2-7b          | $0.05 / 1M tokens       | $0.25 / 1M tokens        |
| meta/llama-2-70b-chat    | $0.65 / 1M tokens       | $2.75 / 1M tokens        |
| meta/llama-2-713b-chat    | $0.10 / 1M tokens       | $0.50 / 1M tokens        |
| meta/llama-2-7b-chat     | $0.05 / 1M tokens       | $0.25 / 1M tokens        |
| mistralai/mistral-7b-v0.1 | $0.05 / 1M tokens       | $0.25 / 1M tokens        |
| mistralai/mistral-7b-instruct-v0.2 | $0.05 / 1M tokens | $0.25 / 1M tokens        |
| mistralai/mixtral-8x7b-instruct-v0.1 | $0.30 / 1M tokens | $1.00 / 1M tokens        |

根据现在的汇率（1USD=7.22CNY），CNY 的表格如下：

| Model                     | Input                   | Output                   |
|---------------------------|-------------------------|--------------------------|
| meta/llama-2-70b         | ￥4.693 / 1M tokens     | ￥19.855 / 1M tokens     |
| meta/llama-2-13b         | ￥0.722 / 1M tokens     | ￥3.61 / 1M tokens       |
| meta/llama-2-7b          | ￥0.361 / 1M tokens     | ￥1.805 / 1M tokens      |
| meta/llama-2-70b-chat    | ￥4.693 / 1M tokens     | ￥19.855 / 1M tokens     |
| meta/llama-2-713b-chat    | ￥0.722 / 1M tokens     | ￥3.61 / 1M tokens       |
| meta/llama-2-7b-chat     | ￥0.361 / 1M tokens     | ￥1.805 / 1M tokens      |
| mistralai/mistral-7b-v0.1 | ￥0.361 / 1M tokens     | ￥1.805 / 1M tokens      |
| mistralai/mistral-7b-instruct-v0.2 | ￥0.361 / 1M tokens | ￥1.805 / 1M tokens      |
| mistralai/mixtral-8x7b-instruct-v0.1 | ￥2.166 / 1M tokens | ￥7.22 / 1M tokens       |

## Cloudflare

> 免费额度：10,000 Neurons per day

具体价格见 [价格计算器](https://ai.cloudflare.com/#pricing-calculator)

以下是根据计算器大致推断出的免费 Tokens 数量。Beta 时期的模型全部免费。

| Model                                | Input (Cost 10k Neurons) | Output (Cost 10k Neurons) |
|--------------------------------------|---------------------------|----------------------------|
| @cf/mistral/mistral-7b-instruct-v0.1 | 400000                    | 34000                      |
| @cf/meta/llama2-7b-chat-int8         | 400000                    | 64000                      |
| @cf/meta/llama2-7b-chat-fp16         | 200000                    | 17000                      |
