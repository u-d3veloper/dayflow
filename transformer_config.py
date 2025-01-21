from transformers import DistilBertTokenizer, DistilBertModel
import torch

# Charger le tokenizer et le modèle DistilBERT
tokenizer = DistilBertTokenizer.from_pretrained("distilbert-base-uncased")
model = DistilBertModel.from_pretrained("distilbert-base-uncased", torch_dtype=torch.float16)

# Préparer le prompt
prompt = "Explain the concept of artificial intelligence in simple terms."
inputs = tokenizer(prompt, return_tensors="pt")

# Envoyer les données au modèle
with torch.no_grad():  # Pas besoin de calculer les gradients
    outputs = model(**inputs)

# Récupérer les embeddings
embeddings = outputs.last_hidden_state

print("Shape des embeddings :", embeddings.shape)  # (1, sequence_length, hidden_size)
