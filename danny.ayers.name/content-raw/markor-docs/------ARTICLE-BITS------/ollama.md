curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "options": {
    "num_ctx": 4096
  }
}'

curl 192.168.0.42:11434/api/generate -d '{
  "model": "qwen2.5-coder:3b",
  "prompt": "Why is the sky blue?",
  "options": {
    "num_ctx": 4096
  }
}'

ollama run qwen2.5-coder:3b

