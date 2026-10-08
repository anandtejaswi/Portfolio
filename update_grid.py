import re

with open('config/grid.ts', 'r') as f:
    content = f.read()

# 1. Remove TryHackMe from import
content = re.sub(r'TryHackMe, ', '', content)

# 2. Remove TryHackMe from gridItems
content = re.sub(r"\s*\{\s*i:\s*'tryhackme'.*?\},", "", content)

# 3. Remove TryHackMe from layouts
content = re.sub(r"\s*\{\s*i:\s*'tryhackme'.*?\},", "", content)

with open('config/grid.ts', 'w') as f:
    f.write(content)
