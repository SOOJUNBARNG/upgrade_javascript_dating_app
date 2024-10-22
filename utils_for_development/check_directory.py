import os

def display_structure(startpath, indent_level=0):
    indent = '  ' * indent_level
    for item in os.listdir(startpath):
        item_path = os.path.join(startpath, item)
        if item == '.git':
            continue  # Skip the .git directory
        if item == 'node_modules':
            continue  # Skip the .git directory
        if os.path.isdir(item_path):
            print(f"{indent}├── {item}/")
            display_structure(item_path, indent_level + 1)
        else:
            print(f"{indent}├── {item}")

# Specify the base directory (can be the current directory or any other path)
base_directory = r"."

# Display the directory structure
display_structure(base_directory)