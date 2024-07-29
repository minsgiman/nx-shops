# Docker build and push

## Purpose
- Build a docker image and push it to a registry.

## Inputs

| Key                 | Purpose                          | Required | Default | Example                                 |
|---------------------|----------------------------------|----------|---------|-----------------------------------------|
| user_name           | Docker Registry User Name        | true     | - |                                         |
| user_password       | Docker Registry Password         | true     | - |                                         |
| registry            | Registry url                     | true     | - | xxx.com/test                            |
| registry_repository | Registry Repository url          | true     | - | cart                                    |
| image_tag           | Docker Image Tag                 | true     | - | beta.26418d84as9                        |
| dockerfile_path     | Dockerfile path for build        | true     | - | apps/cart/Dockerfile                    |
| build_args          | build argument for docker image  | false    | - | NEXT_PUBLIC_PHASE=${{ inputs.phase }}   |


## Outputs

N/A

