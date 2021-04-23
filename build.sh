#!/bin/bash

aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 717778208215.dkr.ecr.us-east-2.amazonaws.com
docker build -t mcfifenstein .
docker tag mcfifenstein:latest 717778208215.dkr.ecr.us-east-2.amazonaws.com/mcfifenstein:latest
docker push 717778208215.dkr.ecr.us-east-2.amazonaws.com/mcfifenstein:latest