#!/bin/bash

########################
# Attaching EBS volume #
########################
# Format the EBS volume
mkfs -t ext4 /dev/xvdf

# Create a mount point directory
mkdir /mnt/myvolume

# Mount the EBS volume
mount /dev/xvdf /mnt/myvolume

# Update /etc/fstab for automatic mount on reboot
echo "/dev/xvdf /mnt/myvolume ext4 defaults,nofail 0 2" >> /etc/fstab

#######################
# Docker installation #
#######################
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl gnupg

sudo install -y -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-compose

sudo usermod -aG docker ubuntu
git clone -b dev/infra https://github.com/Tech-Huddle/digital-portfolio.git
cd digital-portfolio/db
docker-compose up -d