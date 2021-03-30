#!/bin/sh

set -e
BUCKET_NAME=""
BRANCH_NAME=$(echo "$GITHUB_REF" | cut -d/ -f3)

echo "✍ \e[1mSetting bucket name for frontend deployment...\e[m"
case $BRANCH_NAME in
    staging-1)
        BUCKET_NAME="front-staging-1"
        ;;
    dev)
        echo "⚠ Not handled yet, exiting."
        exit 0
        ;;
    master)
        echo "⚠ Not handled yet, exiting."
        exit 0
        ;;
    *)
        echo "❌ Not a deploy target, aborting."
        exit 1
        ;;
esac

echo "AWS_S3_BUCKET=$BUCKET_NAME" >> "$GITHUB_ENV"