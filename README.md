# Installation et pré-requis 
## Backend

Ce dossier contient le code backend du projet. Suivez les étapes ci-dessous pour installer et configurer l'environnement.

### Prérequis

- Python 3.10 ou supérieur
- Un gestionnaire de paquets Python comme `pip`
- (Optionnel) Création d'un environnement virtuel pour isoler les dépendances

### Installation

1. **Cloner le dépôt**  
   Assurez-vous d'avoir cloné le dépôt principal contenant ce dossier.

2. **Naviguer dans le dossier backend**  
   ```bash
   cd backend
   ```

3. **Créer un environnement virtuel (optionnel mais recommandé)**  
   ```bash
   python -m venv venv
   source venv/bin/activate  # Sur Windows : venv\Scripts\activate
   ```

4. **Installer les dépendances**  
   Si un fichier `requirements.txt` est disponible, exécutez :  
   ```bash
   pip install -r requirements.txt
   ```

5. **Clé d'API MISTRAL**  
   - L'application nécéssite une clé d'API Mistral, malgré le manque flagrant de sécurité que cela présente j'ai publié cette clé d'API pour faciliter la correction mais elle sera supprimée dans les 30 jours suivant la date de rendu afin d'éviter tous problème sur mon compte. 
   - IMPORTANT : executer la commande suivante dans le terminal depuis le dossier backend
   ```
    export MISTRAL_API_KEY=<theapikeyinCONFIG.txt>
    ```

### Lancer le Backend

Pour démarrer le backend, exécutez le fichier principal (par exemple, `Api.py`) :  
```bash
uvicorn Api:app
```

### Structure du dossier

- `Api.py` : Point d'entrée principal pour l'API.
- `Client.py` : Gestion des interactions avec les clients.
- `Models.py` : Définition des modèles de données.
- `Prompt.py` : Gestion des prompts ou des interactions spécifiques.
- `CONFIG.txt` : Fichier de configuration.
- `src/` : Contient les fichiers de données nécessaires au fonctionnement.

### Notes

- Les fichiers compilés Python (`.pyc`) dans `__pycache__/` sont générés automatiquement et peuvent être ignorés.
- Assurez-vous que toutes les dépendances sont installées avant de lancer le backend.

## Frontend
Maintenant que le serveur local de l'API tourne, ouvrez un autre terminal et placez vous dans frontend. 
Afin de faire fonctionner l'application assurez vous d'installer les modules nécéssaire avec les commandes suivantes
```
npm install -g pnpm@latest-10
```
puis 
```
pnpm install
```
pnpm est un package manager amélioré par rapport à NPM, il permet de faire les opérations plus rapidement et optimise les transfert. 

Vous pouvez ensuite lancer le projet avec 
```
pnpm dev
```