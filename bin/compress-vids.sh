
#! /bin/bash

set -xe

tmpDir=/tmp/compressed-vids

rm -rf "$tmpDir"
trap "echo cleaning up processes; sudo killall ffmpeg" EXIT

find src/resources/images -iregex ".*\.\(avi\|mov\|mp4\|webm\|3gp\|mpeg\|ogg\)" | while read f
do
    dirName=`dirname "$tmpDir/$f"`
    mkdir -p "${dirName}"
    # ls -l "$tmpDir/${f%.*}.mp4"
    # h265 not supported by chrome
    # ffmpeg -y -i "${f}" -vcodec libx265 -crf 28 "$tmpDir/$f" < /dev/null;
    ffmpeg -y -i "${f}" -vcodec libx264 -crf 24 "$tmpDir/${f%.*}.mp4" < /dev/null;
done
cp -R $tmpDir/src/resources/images/* ./src/resources/images/
rm -rf "$tmpDir"