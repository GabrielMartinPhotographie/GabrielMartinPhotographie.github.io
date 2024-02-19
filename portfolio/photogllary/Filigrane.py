from PIL import Image, ImageDraw, ImageFont
import os

def add_watermark(input_folder, output_folder, watermark_text, font_size=40):
    # Créer le dossier de sortie s'il n'existe pas
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Liste tous les fichiers dans le dossier d'entrée
    image_files = [f for f in os.listdir(input_folder) if os.path.isfile(os.path.join(input_folder, f))]

    # Charger la police par défaut "arial.ttf" de Pillow
    font_path = os.path.join(os.path.dirname(ImageFont.__file__), "arial.ttf")
    font = ImageFont.truetype(font_path, font_size)

    for image_file in image_files:
        # Chemin complet du fichier d'entrée
        input_path = os.path.join(input_folder, image_file)

        # Ouvrir l'image avec Pillow
        img = Image.open(input_path)

        # Créer un objet Draw pour ajouter le filigrane
        draw = ImageDraw.Draw(img)

        # Coordonnées pour placer le filigrane en bas à droite
        text = watermark_text
        text_width, text_height = draw.textsize(text, font)
        margin = 10
        position = (img.width - text_width - margin, img.height - text_height - margin)

        # Couleur du filigrane (blanc par défaut)
        watermark_color = (255, 255, 255, 128)

        # Ajouter le filigrane à l'image
        draw.text(position, text, font=font, fill=watermark_color)

        # Chemin complet du fichier de sortie dans le dossier avec le filigrane
        output_path = os.path.join(output_folder, image_file)

        # Enregistrer l'image avec le filigrane
        img.save(output_path)

        print(f"Filigrane ajouté à l'image {image_file} et enregistrée dans {output_path}")

# Spécifiez le dossier d'entrée et le dossier de sortie
dossier_entree = 'Portfolio/'
dossier_sortie = 'Portfolio/avec_filigrane/'

# Spécifiez le texte du filigrane
texte_filigrane = 'Gabriel MARTIN'

# Spécifiez la taille de la police du filigrane
taille_police_filigrane = 50  # Changez cette valeur selon vos besoins

# Appeler la fonction pour ajouter le filigrane aux images
add_watermark(dossier_entree, dossier_sortie, watermark_text=texte_filigrane, font_size=taille_police_filigrane)
