from PIL import Image
import os
from tqdm import tqdm  # Importez la classe tqdm pour la barre de progression

def compress_images(input_folder, output_folder, compression_percentage=85):
    # Créer le dossier de sortie s'il n'existe pas
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Liste tous les fichiers dans le dossier d'entrée
    image_files = [f for f in os.listdir(input_folder) if os.path.isfile(os.path.join(input_folder, f))]

    # Utilisez tqdm pour créer une barre de progression
    for image_file in tqdm(image_files, desc="Compression en cours", unit="image"):
        # Chemin complet du fichier d'entrée
        input_path = os.path.join(input_folder, image_file)

        # Ouvrir l'image avec Pillow
        img = Image.open(input_path)

        # Calculer la qualité en fonction du pourcentage de compression demandé
        quality = int(100 - compression_percentage)

        # Chemin complet du fichier de sortie dans le dossier compressé
        output_path = os.path.join(output_folder, image_file)

        # Enregistrer l'image compressée avec le pourcentage de qualité spécifié
        img.save(output_path, quality=quality)

    print(f"\nCompression terminée. Images compressées enregistrées dans le dossier : {output_folder}")

# Spécifiez le dossier d'entrée et le dossier de sortie
dossier_entree = 'Portfolio/'
dossier_sortie = 'Portfolio/voitures/'

# Spécifiez le pourcentage de compression souhaité
pourcentage_compression = 50  # Changez cette valeur selon vos besoins

# Appeler la fonction pour compresser les images avec le pourcentage spécifié
compress_images(dossier_entree, dossier_sortie, compression_percentage=pourcentage_compression)
