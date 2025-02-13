import os

# Path to the res folder
res_folder = 'c:/Users/faze_/OneDrive/Documents/Coding Projects/SUMC/Website/res'

# Loop through all files in the res folder
for filename in os.listdir(res_folder):
    # Check if the file has a .jpg extension
    if filename.endswith('.jpg'):
        # Construct the full file path
        old_file = os.path.join(res_folder, filename)
        # Construct the new file path with .JPG extension
        new_file = os.path.join(res_folder, filename.replace('.jpg', '.JPG'))
        # Rename the file
        os.rename(old_file, new_file)
        print(f'Renamed: {old_file} to {new_file}')