module "security_group" {
  source = "../security_group"
}
module "ebs_volume" {
  source = "../ebs_volume"
}

resource "aws_instance" "dp_server" {
  ami           = "ami-0df7a207adb9748c7"  # Specify the desired AMI ID for your region
  instance_type = "t2.micro"
  key_name      = "dev-key"
  availability_zone = "ap-southeast-1a"
  vpc_security_group_ids = [ module.security_group.sg_id ]   # As we are creating the EC2 in a VPC
  user_data = file("${path.module}/../user_data/user-data.sh")
  user_data_replace_on_change = true
  tags = {
    Name = "dp-dev-server"
  }
}
output "instance_id" {
  value = aws_instance.dp_server.id
}

resource "aws_volume_attachment" "my_ebs_volume_attachment" {
  device_name = "/dev/xvdf"
  volume_id   = module.ebs_volume.ebs_id
  instance_id = aws_instance.dp_server.id
}