#!/bin/bash
function formatChangeLog {
    cat <<EOF >> CHANGELOG.md
- \`$1\` $2 $3
\`\`\`
$4
\`\`\`
EOF
}
if [ -e CHANGELOG.md ]; then
    echo "=> Cleaning previous CHANGELOG.md 🧽"
    rm CHANGELOG.md
    echo "=> Changelog Cleaned ✅"
else
    echo "Change log not present ✅"
fi
echo "Generating Change Log $(date) 🪵"
count=$(git log --pretty=format:"%ad Commiter: %cn Author: %an %s" | wc -l)
i=1
while [ "$i" -le "$(( count+1 ))" ]
do
    date=$(git log --pretty=format:"%ad | Commiter: %cn | Author: %an | %s" | sed -n ${i}p | awk -F '|' '{ print $1 }') 
    commiter=$(git log --pretty=format:"%ad | Commiter: %cn | Author: %an | %s" | sed -n ${i}p | awk -F '|' '{ print $2 }') 
    author=$(git log --pretty=format:"%ad | Commiter: %cn | Author: %an | %s" | sed -n ${i}p | awk -F '|' '{ print $3 }') 
    message=$(git log --pretty=format:"%ad | Commiter: %cn | Author: %an | %s" | sed -n ${i}p | awk -F '|' '{ print $4 }') 
    formatChangeLog "$date" "$commiter" "$author" "$message"
    i=$(( i+1 ))
done