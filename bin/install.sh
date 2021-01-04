#! /bin/bash
HOST=`ifconfig | grep broadcast | grep -v '0.0.0.0' |awk -F ' ' -v OFS=',' '{print $2}'`
ENVTYPE=development

ip_num=`echo $HOST | awk '{print NF}'`


if [ 0"$MATRIX_PRIVDATA_DIR" = "0." -o -z "$MATRIX_PRIVDATA_DIR" ];then
    venv_loc="."
    # 如果不存在这些变量，使用当前目录存储
fi

if [ "$ip_num" -ne "1" ];then
    echo "server_ip is more than one, ERROR:" ${ENVTYPE} ${HOST}
    exit -1;
fi


# 手动添加
#pip install --upgrade pip
#pip install -r  ./requirements.txt -i https://pypi.douban.com/simple/


#if [ "production" = "$ENVTYPE" ];then
#    if [ "$USER" = "work" ];then
#        virtual=/home/work/software/python3
#    else
#        virtual=python3
#    fi
#elif [ "development" = "$ENVTYPE" ];then
#    if [ "$USER" = "work" ];then
#        virtual=/home/work/software/python3
#    else
#        virtual=python3
#    fi
#elif [ "$ENVTYPE" = "test" ];then
#    virtual=python3
#fi
#
#echo "installing: ENVTYPE=${ENVTYPE} in: ${USER}"
#

virtual=virtualenv

if [ "$venv_loc" = "." ];then

    $virtual $venv_loc/venv
    source $venv_loc/venv/bin/activate
    pip install --upgrade pip
    #pip3 install -r $venv_loc/requirements.txt -i https://pypi.douban.com/simple/ > /dev/null 2>&1
    pip install -r $venv_loc/requirements.txt -i https://pypi.douban.com/simple/
    deactivate
    echo "installed: offline"
    #echo "$ENVTYPE" > $venv_loc/env_flag.in
else
    $virtual $MATRIX_PRIVDATA_DIR/venv
    source $MATRIX_PRIVDATA_DIR/venv/bin/activate
    pip install -r  $MATRIX_CODE_DIR/requirements.txt -i https://pypi.douban.com/simple/ > /dev/null 2>&1
    deactivate
    echo "installed: online"
    #echo "$ENVTYPE" > $MATRIX_PRIVDATA_DIR/env_flag.in
fi

