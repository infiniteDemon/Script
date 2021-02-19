export TZ=UTC-8
export TIME_ID=$(date +%Y-%m-%d-%H-%M-%S)
export ALIYUN_PWD=
export MIRROR_PATH="registry.cn-shanghai.aliyuncs.com"
export NAMESPACES="infinitedemon"
export CI_PROJECT_NAME="test-project"
docker login --username="你始终我的云神" -p ${ALIYUN_PWD} ${MIRROR_PATH}
docker build -t ${MIRROR_PATH}/${NAMESPACES}/${CI_PROJECT_NAME}:${TIME_ID} .
docker push ${MIRROR_PATH}/${NAMESPACES}/${CI_PROJECT_NAME}:${TIME_ID}
echo project_path= ${MIRROR_PATH}/${NAMESPACES}/${CI_PROJECT_NAME}:${TIME_ID}