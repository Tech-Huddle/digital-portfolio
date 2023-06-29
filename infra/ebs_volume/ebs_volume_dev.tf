resource "aws_ebs_volume" "dp_ebs_volume" {
  availability_zone = "ap-southeast-1a"
  size              = 10
  type              = "gp3"
  tags = {
    Name = "digital-portfolio-volume"
  }
}
output "ebs_id" {
  value = aws_ebs_volume.dp_ebs_volume.id
}