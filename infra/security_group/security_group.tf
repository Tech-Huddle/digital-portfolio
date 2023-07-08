data "aws_vpc" "existing_vpc" {
  id = "vpc-02bfe43fa0de25d03"
}

resource "aws_security_group" "dp_sg" {
  name        = "digital_portfolio_sg"
  description = "Test Security Group"
  vpc_id      = data.aws_vpc.existing_vpc.id
  tags = {
    Name = "digital-portfolio-sg"
  }
}
output "sg_id" {
  value = aws_security_group.dp_sg.id
}

resource "aws_security_group_rule" "docker_mysql" {
  type              = "ingress"
  from_port         = 8080
  to_port           = 8080
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.dp_sg.id
}

resource "aws_security_group_rule" "ssh" {
  type              = "ingress"
  from_port         = 22
  to_port           = 22
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.dp_sg.id
}

resource "aws_security_group_rule" "api_server" {
  type              = "ingress"
  from_port         = 8000
  to_port           = 8000
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
  security_group_id = aws_security_group.dp_sg.id
}

resource "aws_security_group_rule" "allow_all" {
    type             = "egress"
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    security_group_id = aws_security_group.dp_sg.id
}