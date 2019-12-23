#!/bin/sh

echo "Creating project..."

oc new-project rht-product-management --display-name='Red Hat - Product Management' > /dev/null

echo "Creating application artifacts..."

oc create -f ocp/product-management.yml > /dev/null

echo "Exposing the external route..."

oc expose svc/partner-frontend > /dev/null